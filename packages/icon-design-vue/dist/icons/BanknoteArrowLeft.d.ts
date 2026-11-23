import type { DefineComponent } from 'vue';

export interface BanknoteArrowLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknoteArrowLeft: DefineComponent<BanknoteArrowLeftProps>;

export default BanknoteArrowLeft;
export { BanknoteArrowLeft };
