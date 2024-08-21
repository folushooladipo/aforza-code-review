// Source: https://github.com/oldboyxx/jira_clone/blob/26a9e77b1789fef9cb43edb5d6018cf1663cf035/client/src/Auth/Authenticate.jsx#L1
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { getStoredAuthToken, storeAuthToken } from 'shared/utils/authToken';
import { PageLoader } from 'shared/components';

const Authenticate = () => {
  const history = useHistory();

  useEffect(() => {
    const createGuestAccount = async () => {
      try {
        const { authToken } = await api.post('/authentication/guest');
        storeAuthToken(authToken);
        history.push('/');
      } catch (error) {
        toast.error(error);
      }
    };

    if (!getStoredAuthToken()) {
      createGuestAccount();
    }
  }, [history]);

  return <PageLoader />;
};

export default Authenticate;
