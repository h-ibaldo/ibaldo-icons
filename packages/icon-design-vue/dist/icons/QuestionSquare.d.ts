import type { DefineComponent } from 'vue';

export interface QuestionSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const QuestionSquare: DefineComponent<QuestionSquareProps>;

export default QuestionSquare;
export { QuestionSquare };
