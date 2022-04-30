import {NextPage} from 'next/types';

export type PageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactElement;
};
