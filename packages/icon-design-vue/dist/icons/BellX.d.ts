import type { DefineComponent } from 'vue';

export interface BellXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellX: DefineComponent<BellXProps>;

export default BellX;
export { BellX };
