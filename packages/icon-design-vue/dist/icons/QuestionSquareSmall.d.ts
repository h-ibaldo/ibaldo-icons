import type { DefineComponent } from 'vue';

export interface QuestionSquareSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const QuestionSquareSmall: DefineComponent<QuestionSquareSmallProps>;

export default QuestionSquareSmall;
export { QuestionSquareSmall };
