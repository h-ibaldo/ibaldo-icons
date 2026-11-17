import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchQuestionKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchQuestionKnob: ForwardRefExoticComponent<StopwatchQuestionKnobProps & RefAttributes<SVGSVGElement>>;

export default StopwatchQuestionKnob;
export { StopwatchQuestionKnob };
