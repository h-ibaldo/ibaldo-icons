import type { DefineComponent } from 'vue';

export interface BanknoteCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknoteCheck: DefineComponent<BanknoteCheckProps>;

export default BanknoteCheck;
export { BanknoteCheck };
