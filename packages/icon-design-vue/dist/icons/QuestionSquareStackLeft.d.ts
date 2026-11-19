import type { DefineComponent } from 'vue';

export interface QuestionSquareStackLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const QuestionSquareStackLeft: DefineComponent<QuestionSquareStackLeftProps>;

export default QuestionSquareStackLeft;
export { QuestionSquareStackLeft };
