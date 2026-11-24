import type { DefineComponent } from 'vue';

export interface BombCapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BombCap: DefineComponent<BombCapProps>;

export default BombCap;
export { BombCap };
