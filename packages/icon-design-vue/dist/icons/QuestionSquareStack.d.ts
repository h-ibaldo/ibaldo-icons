import type { DefineComponent } from 'vue';

export interface QuestionSquareStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const QuestionSquareStack: DefineComponent<QuestionSquareStackProps>;

export default QuestionSquareStack;
export { QuestionSquareStack };
