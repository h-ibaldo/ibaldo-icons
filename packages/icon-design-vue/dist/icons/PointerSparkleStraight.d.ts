import type { DefineComponent } from 'vue';

export interface PointerSparkleStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerSparkleStraight: DefineComponent<PointerSparkleStraightProps>;

export default PointerSparkleStraight;
export { PointerSparkleStraight };
