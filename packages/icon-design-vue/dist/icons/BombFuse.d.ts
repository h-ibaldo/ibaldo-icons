import type { DefineComponent } from 'vue';

export interface BombFuseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BombFuse: DefineComponent<BombFuseProps>;

export default BombFuse;
export { BombFuse };
