import type { DefineComponent } from 'vue';

export interface QuestionCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const QuestionCircle: DefineComponent<QuestionCircleProps>;

export default QuestionCircle;
export { QuestionCircle };
