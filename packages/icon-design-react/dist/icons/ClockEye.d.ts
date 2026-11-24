import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockEyeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockEye: ForwardRefExoticComponent<ClockEyeProps & RefAttributes<SVGSVGElement>>;

export default ClockEye;
export { ClockEye };
