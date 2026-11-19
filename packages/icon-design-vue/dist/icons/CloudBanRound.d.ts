import type { DefineComponent } from 'vue';

export interface CloudBanRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudBanRound: DefineComponent<CloudBanRoundProps>;

export default CloudBanRound;
export { CloudBanRound };
