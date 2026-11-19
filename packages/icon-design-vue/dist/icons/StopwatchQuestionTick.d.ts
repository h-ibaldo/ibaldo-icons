import type { DefineComponent } from 'vue';

export interface StopwatchQuestionTickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchQuestionTick: DefineComponent<StopwatchQuestionTickProps>;

export default StopwatchQuestionTick;
export { StopwatchQuestionTick };
