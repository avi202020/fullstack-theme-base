import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import FeatureSlider from './detail/feature/FeatureSlider';
import { useQuery, useSubscription } from '@apollo/react-hooks';
import { GET_ALL_PROJECTS, PROJECT_ADDED } from '../../queries/project';

const FlowMain = () => {
  const [projects, setProjects] = useState([]);
  const { loading } = useQuery(GET_ALL_PROJECTS, {
    onCompleted: data => {
      if (data.project) {
        setProjects(data.project);
      }
    },
    onError: error => {
      console.log(error);
    }
  });

  useSubscription(PROJECT_ADDED, {
    onSubscriptionData: ({ subscriptionData }) => {
      console.log(subscriptionData);
      const newItem = subscriptionData.data.projectAdded;
      setProjects(projects.concat(newItem));
    }
  });

  return (
    <>
      <Switch>
        <Route
          exact
          path="/flow"
          render={() => <HomePage projects={projects} loading={loading} />}
        />
        <Route path="/flow/:id" render={() => <FeatureSlider />} />
      </Switch>
    </>
  );
};

export default FlowMain;
