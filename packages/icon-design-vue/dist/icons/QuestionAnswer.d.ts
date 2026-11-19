import type { DefineComponent } from 'vue';

export interface QuestionAnswerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const QuestionAnswer: DefineComponent<QuestionAnswerProps>;

export default QuestionAnswer;
export { QuestionAnswer };
