import type { DefineComponent } from 'vue';

export interface BanknoteXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknoteX: DefineComponent<BanknoteXProps>;

export default BanknoteX;
export { BanknoteX };
