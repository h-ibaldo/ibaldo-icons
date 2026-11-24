import type { DefineComponent } from 'vue';

export interface PilcrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Pilcrow: DefineComponent<PilcrowProps>;

export default Pilcrow;
export { Pilcrow };
