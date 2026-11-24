import type { DefineComponent } from 'vue';

export interface DistributeLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DistributeLeft: DefineComponent<DistributeLeftProps>;

export default DistributeLeft;
export { DistributeLeft };
