import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenShareLaptopXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenShareLaptopX: ForwardRefExoticComponent<ScreenShareLaptopXProps & RefAttributes<SVGSVGElement>>;

export default ScreenShareLaptopX;
export { ScreenShareLaptopX };
