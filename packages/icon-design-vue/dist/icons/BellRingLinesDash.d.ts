import type { DefineComponent } from 'vue';

export interface BellRingLinesDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellRingLinesDash: DefineComponent<BellRingLinesDashProps>;

export default BellRingLinesDash;
export { BellRingLinesDash };
