import type { DefineComponent } from 'vue';

export interface CloudOffRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudOffRound: DefineComponent<CloudOffRoundProps>;

export default CloudOffRound;
export { CloudOffRound };
