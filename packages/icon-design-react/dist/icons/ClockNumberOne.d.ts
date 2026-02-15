import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockNumberOneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockNumberOne: ForwardRefExoticComponent<ClockNumberOneProps & RefAttributes<SVGSVGElement>>;

export default ClockNumberOne;
export { ClockNumberOne };
