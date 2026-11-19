import type { DefineComponent } from 'vue';

export interface CloudMinusCornerRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudMinusCornerRound: DefineComponent<CloudMinusCornerRoundProps>;

export default CloudMinusCornerRound;
export { CloudMinusCornerRound };
