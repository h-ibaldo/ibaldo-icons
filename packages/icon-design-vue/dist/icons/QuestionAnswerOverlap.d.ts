import type { DefineComponent } from 'vue';

export interface QuestionAnswerOverlapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const QuestionAnswerOverlap: DefineComponent<QuestionAnswerOverlapProps>;

export default QuestionAnswerOverlap;
export { QuestionAnswerOverlap };
