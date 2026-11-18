import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchQuestionBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchQuestionBare: ForwardRefExoticComponent<StopwatchQuestionBareProps & RefAttributes<SVGSVGElement>>;

export default StopwatchQuestionBare;
export { StopwatchQuestionBare };
