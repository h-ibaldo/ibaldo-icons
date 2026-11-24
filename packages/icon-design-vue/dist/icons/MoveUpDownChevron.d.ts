import type { DefineComponent } from 'vue';

export interface MoveUpDownChevronProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MoveUpDownChevron: DefineComponent<MoveUpDownChevronProps>;

export default MoveUpDownChevron;
export { MoveUpDownChevron };
