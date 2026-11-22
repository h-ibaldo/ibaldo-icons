import type { DefineComponent } from 'vue';

export interface DistributeBottomProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DistributeBottom: DefineComponent<DistributeBottomProps>;

export default DistributeBottom;
export { DistributeBottom };
