import type { DefineComponent } from 'vue';

export interface CloudCheckRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudCheckRound: DefineComponent<CloudCheckRoundProps>;

export default CloudCheckRound;
export { CloudCheckRound };
