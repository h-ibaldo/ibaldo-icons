import type { DefineComponent } from 'vue';

export interface CloudWarningRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudWarningRound: DefineComponent<CloudWarningRoundProps>;

export default CloudWarningRound;
export { CloudWarningRound };
