import type { DefineComponent } from 'vue';

export interface BagSmileProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BagSmile: DefineComponent<BagSmileProps>;

export default BagSmile;
export { BagSmile };
