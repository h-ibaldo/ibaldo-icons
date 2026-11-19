import type { DefineComponent } from 'vue';

export interface CloudMinusRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudMinusRound: DefineComponent<CloudMinusRoundProps>;

export default CloudMinusRound;
export { CloudMinusRound };
