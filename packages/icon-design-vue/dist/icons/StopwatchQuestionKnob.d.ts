import type { DefineComponent } from 'vue';

export interface StopwatchQuestionKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchQuestionKnob: DefineComponent<StopwatchQuestionKnobProps>;

export default StopwatchQuestionKnob;
export { StopwatchQuestionKnob };
