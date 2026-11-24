import type { DefineComponent } from 'vue';

export interface DistributeTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DistributeTop: DefineComponent<DistributeTopProps>;

export default DistributeTop;
export { DistributeTop };
