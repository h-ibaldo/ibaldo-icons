import type { DefineComponent } from 'vue';

export interface DistributeTopBottomProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DistributeTopBottom: DefineComponent<DistributeTopBottomProps>;

export default DistributeTopBottom;
export { DistributeTopBottom };
