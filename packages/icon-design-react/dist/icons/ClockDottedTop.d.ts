import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockDottedTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockDottedTop: ForwardRefExoticComponent<ClockDottedTopProps & RefAttributes<SVGSVGElement>>;

export default ClockDottedTop;
export { ClockDottedTop };
