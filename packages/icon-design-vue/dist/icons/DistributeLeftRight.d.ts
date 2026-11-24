import type { DefineComponent } from 'vue';

export interface DistributeLeftRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DistributeLeftRight: DefineComponent<DistributeLeftRightProps>;

export default DistributeLeftRight;
export { DistributeLeftRight };
