import type { DefineComponent } from 'vue';

export interface CloudPlusRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudPlusRound: DefineComponent<CloudPlusRoundProps>;

export default CloudPlusRound;
export { CloudPlusRound };
