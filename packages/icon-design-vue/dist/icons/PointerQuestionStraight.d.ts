import type { DefineComponent } from 'vue';

export interface PointerQuestionStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerQuestionStraight: DefineComponent<PointerQuestionStraightProps>;

export default PointerQuestionStraight;
export { PointerQuestionStraight };
