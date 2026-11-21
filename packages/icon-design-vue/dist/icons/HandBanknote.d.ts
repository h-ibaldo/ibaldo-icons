import type { DefineComponent } from 'vue';

export interface HandBanknoteProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandBanknote: DefineComponent<HandBanknoteProps>;

export default HandBanknote;
export { HandBanknote };
