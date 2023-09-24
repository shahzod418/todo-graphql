import { useEffect, useRef } from 'react';

import { useUserLazyQuery, useCreateUserMutation } from '@graphql';

export const useUserId = () => {
  const userId = useRef(localStorage.getItem('userId'));

  const [getUser] = useUserLazyQuery();
  const [createUser] = useCreateUserMutation();

  const handleCreateUser = async () => {
    const { data } = await createUser();

    if (!data?.createUser) {
      return;
    }

    localStorage.setItem('userId', data.createUser.id);
  };

  useEffect(() => {
    if (userId.current) {
      getUser({ variables: { userInput: { userId: userId.current } } }).then(({ data }) => {
        if (!data?.user) {
          handleCreateUser();
        }
      });
    } else {
      handleCreateUser();
    }
  }, []);

  return { userId: userId.current };
};
