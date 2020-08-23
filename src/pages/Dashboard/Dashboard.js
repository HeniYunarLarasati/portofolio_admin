import React, { useEffect } from 'react';
import PageHeader from '../../components/fragments/PageHeader';
import { useDispatch } from 'react-redux';
import { fetchProfile } from './actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <PageHeader title="Dashboard" />
      <h1>hehe</h1>
    </div>
  );
};

export default Dashboard;
