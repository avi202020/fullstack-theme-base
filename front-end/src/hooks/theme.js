import { useMutation } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/client';

import { CHANGE_THEME, GET_LOCAL_THEME } from '../queries/theme';

export const useTheme = () => {
  //const client = useApolloClient();
  const [changeTheme] = useMutation(CHANGE_THEME, {
    onCompleted() {
      console.log('theme changed');
    },
    onError() {
      console.log('error');
    },

    update: cache => {
      const data = cache.readQuery({
        query: GET_LOCAL_THEME
      });
      console.log(data);
      const dataCopy = { ...data, darkTheme: !data.darkTheme };
      cache.writeQuery({
        query: GET_LOCAL_THEME,
        data: dataCopy
      });
    }
  });

  return { changeTheme };
};
