import { FC } from 'react';

import { Card } from 'antd';

import { useUserId } from '@hooks/use-user-id';

export const Main: FC = () => {
  const { userId } = useUserId();

  return <Card className="h-full w-full max-w-5xl overflow-y-scroll lg:h-2/3"></Card>;
};
