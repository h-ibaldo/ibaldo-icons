import type { DefineComponent } from 'vue';

export interface BanknoteArrowDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknoteArrowDown: DefineComponent<BanknoteArrowDownProps>;

export default BanknoteArrowDown;
export { BanknoteArrowDown };
