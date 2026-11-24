import type { DefineComponent } from 'vue';

export interface BanknoteArrowRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknoteArrowRight: DefineComponent<BanknoteArrowRightProps>;

export default BanknoteArrowRight;
export { BanknoteArrowRight };
