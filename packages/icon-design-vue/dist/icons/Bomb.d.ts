import type { DefineComponent } from 'vue';

export interface BombProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Bomb: DefineComponent<BombProps>;

export default Bomb;
export { Bomb };
