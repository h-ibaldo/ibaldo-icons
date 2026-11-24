import type { DefineComponent } from 'vue';

export interface BanknoteArrowUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknoteArrowUp: DefineComponent<BanknoteArrowUpProps>;

export default BanknoteArrowUp;
export { BanknoteArrowUp };
