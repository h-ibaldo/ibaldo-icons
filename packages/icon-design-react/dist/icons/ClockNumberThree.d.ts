import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockNumberThreeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockNumberThree: ForwardRefExoticComponent<ClockNumberThreeProps & RefAttributes<SVGSVGElement>>;

export default ClockNumberThree;
export { ClockNumberThree };
