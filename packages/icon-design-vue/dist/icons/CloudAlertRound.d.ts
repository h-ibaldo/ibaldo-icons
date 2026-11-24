import type { DefineComponent } from 'vue';

export interface CloudAlertRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudAlertRound: DefineComponent<CloudAlertRoundProps>;

export default CloudAlertRound;
export { CloudAlertRound };
