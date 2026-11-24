import type { DefineComponent } from 'vue';

export interface BellSquareDotDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellSquareDotDash: DefineComponent<BellSquareDotDashProps>;

export default BellSquareDotDash;
export { BellSquareDotDash };
