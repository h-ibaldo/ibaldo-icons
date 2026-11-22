import type { DefineComponent } from 'vue';

export interface DistributeCenterVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DistributeCenterVertical: DefineComponent<DistributeCenterVerticalProps>;

export default DistributeCenterVertical;
export { DistributeCenterVertical };
