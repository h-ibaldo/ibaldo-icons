import type { DefineComponent } from 'vue';

export interface MoveUpDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MoveUpDown: DefineComponent<MoveUpDownProps>;

export default MoveUpDown;
export { MoveUpDown };
