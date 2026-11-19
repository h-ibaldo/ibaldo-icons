import type { DefineComponent } from 'vue';

export interface CloudPlusCornerRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudPlusCornerRound: DefineComponent<CloudPlusCornerRoundProps>;

export default CloudPlusCornerRound;
export { CloudPlusCornerRound };
