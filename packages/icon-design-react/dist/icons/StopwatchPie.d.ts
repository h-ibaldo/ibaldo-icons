import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchPieProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchPie: ForwardRefExoticComponent<StopwatchPieProps & RefAttributes<SVGSVGElement>>;

export default StopwatchPie;
export { StopwatchPie };
