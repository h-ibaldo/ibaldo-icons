import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchQuestionDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchQuestionDetached: ForwardRefExoticComponent<StopwatchQuestionDetachedProps & RefAttributes<SVGSVGElement>>;

export default StopwatchQuestionDetached;
export { StopwatchQuestionDetached };
