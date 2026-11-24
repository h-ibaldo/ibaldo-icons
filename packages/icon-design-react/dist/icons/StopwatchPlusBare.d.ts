import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchPlusBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchPlusBare: ForwardRefExoticComponent<StopwatchPlusBareProps & RefAttributes<SVGSVGElement>>;

export default StopwatchPlusBare;
export { StopwatchPlusBare };
