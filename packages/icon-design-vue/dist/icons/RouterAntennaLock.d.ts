import type { DefineComponent } from 'vue';

export interface RouterAntennaLockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RouterAntennaLock: DefineComponent<RouterAntennaLockProps>;

export default RouterAntennaLock;
export { RouterAntennaLock };
