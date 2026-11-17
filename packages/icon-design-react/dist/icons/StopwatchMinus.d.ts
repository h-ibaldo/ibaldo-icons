import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchMinus: ForwardRefExoticComponent<StopwatchMinusProps & RefAttributes<SVGSVGElement>>;

export default StopwatchMinus;
export { StopwatchMinus };
