import type { DefineComponent } from 'vue';

export interface PointerPlusStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerPlusStraight: DefineComponent<PointerPlusStraightProps>;

export default PointerPlusStraight;
export { PointerPlusStraight };
