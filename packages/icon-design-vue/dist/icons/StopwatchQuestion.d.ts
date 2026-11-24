import type { DefineComponent } from 'vue';

export interface StopwatchQuestionProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchQuestion: DefineComponent<StopwatchQuestionProps>;

export default StopwatchQuestion;
export { StopwatchQuestion };
