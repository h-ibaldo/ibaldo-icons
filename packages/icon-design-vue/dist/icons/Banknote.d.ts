import type { DefineComponent } from 'vue';

export interface BanknoteProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Banknote: DefineComponent<BanknoteProps>;

export default Banknote;
export { Banknote };
