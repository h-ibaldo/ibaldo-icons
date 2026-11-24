import type { DefineComponent } from 'vue';

export interface CloudEyeRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudEyeRound: DefineComponent<CloudEyeRoundProps>;

export default CloudEyeRound;
export { CloudEyeRound };
