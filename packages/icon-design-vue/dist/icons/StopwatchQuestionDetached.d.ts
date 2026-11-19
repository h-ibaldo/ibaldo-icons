import type { DefineComponent } from 'vue';

export interface StopwatchQuestionDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchQuestionDetached: DefineComponent<StopwatchQuestionDetachedProps>;

export default StopwatchQuestionDetached;
export { StopwatchQuestionDetached };
