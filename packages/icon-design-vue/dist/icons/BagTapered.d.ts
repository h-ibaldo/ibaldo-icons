import type { DefineComponent } from 'vue';

export interface BagTaperedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BagTapered: DefineComponent<BagTaperedProps>;

export default BagTapered;
export { BagTapered };
