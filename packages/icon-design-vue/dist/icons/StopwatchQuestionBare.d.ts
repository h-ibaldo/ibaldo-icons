import type { DefineComponent } from 'vue';

export interface StopwatchQuestionBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchQuestionBare: DefineComponent<StopwatchQuestionBareProps>;

export default StopwatchQuestionBare;
export { StopwatchQuestionBare };
