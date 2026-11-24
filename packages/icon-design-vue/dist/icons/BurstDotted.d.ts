import type { DefineComponent } from 'vue';

export interface BurstDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BurstDotted: DefineComponent<BurstDottedProps>;

export default BurstDotted;
export { BurstDotted };
