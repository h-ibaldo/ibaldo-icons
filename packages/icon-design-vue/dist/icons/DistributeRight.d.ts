import type { DefineComponent } from 'vue';

export interface DistributeRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DistributeRight: DefineComponent<DistributeRightProps>;

export default DistributeRight;
export { DistributeRight };
