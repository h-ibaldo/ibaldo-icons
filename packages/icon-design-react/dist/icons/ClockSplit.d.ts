import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockSplitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockSplit: ForwardRefExoticComponent<ClockSplitProps & RefAttributes<SVGSVGElement>>;

export default ClockSplit;
export { ClockSplit };
