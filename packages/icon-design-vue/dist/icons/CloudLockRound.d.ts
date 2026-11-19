import type { DefineComponent } from 'vue';

export interface CloudLockRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudLockRound: DefineComponent<CloudLockRoundProps>;

export default CloudLockRound;
export { CloudLockRound };
