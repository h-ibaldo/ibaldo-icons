import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenShareLaptopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenShareLaptop: ForwardRefExoticComponent<ScreenShareLaptopProps & RefAttributes<SVGSVGElement>>;

export default ScreenShareLaptop;
export { ScreenShareLaptop };
