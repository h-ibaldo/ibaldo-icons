import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockNumberTwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockNumberTwo: ForwardRefExoticComponent<ClockNumberTwoProps & RefAttributes<SVGSVGElement>>;

export default ClockNumberTwo;
export { ClockNumberTwo };
