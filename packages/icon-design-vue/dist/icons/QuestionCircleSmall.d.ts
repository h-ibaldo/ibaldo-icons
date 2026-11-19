import type { DefineComponent } from 'vue';

export interface QuestionCircleSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const QuestionCircleSmall: DefineComponent<QuestionCircleSmallProps>;

export default QuestionCircleSmall;
export { QuestionCircleSmall };
