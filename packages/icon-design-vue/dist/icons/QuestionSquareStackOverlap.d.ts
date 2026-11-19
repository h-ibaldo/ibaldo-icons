import type { DefineComponent } from 'vue';

export interface QuestionSquareStackOverlapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const QuestionSquareStackOverlap: DefineComponent<QuestionSquareStackOverlapProps>;

export default QuestionSquareStackOverlap;
export { QuestionSquareStackOverlap };
