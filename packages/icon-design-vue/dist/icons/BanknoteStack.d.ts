import type { DefineComponent } from 'vue';

export interface BanknoteStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknoteStack: DefineComponent<BanknoteStackProps>;

export default BanknoteStack;
export { BanknoteStack };
