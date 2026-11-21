import type { DefineComponent } from 'vue';

export interface BanknoteStackFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknoteStackFlat: DefineComponent<BanknoteStackFlatProps>;

export default BanknoteStackFlat;
export { BanknoteStackFlat };
