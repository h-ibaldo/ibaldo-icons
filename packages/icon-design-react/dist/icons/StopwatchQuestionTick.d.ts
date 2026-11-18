import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchQuestionTickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchQuestionTick: ForwardRefExoticComponent<StopwatchQuestionTickProps & RefAttributes<SVGSVGElement>>;

export default StopwatchQuestionTick;
export { StopwatchQuestionTick };
