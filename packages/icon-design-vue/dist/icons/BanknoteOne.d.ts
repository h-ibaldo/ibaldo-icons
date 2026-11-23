import type { DefineComponent } from 'vue';

export interface BanknoteOneProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknoteOne: DefineComponent<BanknoteOneProps>;

export default BanknoteOne;
export { BanknoteOne };
