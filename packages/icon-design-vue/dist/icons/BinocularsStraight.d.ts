import type { DefineComponent } from 'vue';

export interface BinocularsStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BinocularsStraight: DefineComponent<BinocularsStraightProps>;

export default BinocularsStraight;
export { BinocularsStraight };
