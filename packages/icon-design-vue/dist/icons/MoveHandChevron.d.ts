import type { DefineComponent } from 'vue';

export interface MoveHandChevronProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MoveHandChevron: DefineComponent<MoveHandChevronProps>;

export default MoveHandChevron;
export { MoveHandChevron };
