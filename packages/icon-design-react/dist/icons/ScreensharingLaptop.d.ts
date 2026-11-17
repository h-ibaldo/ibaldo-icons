import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreensharingLaptopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreensharingLaptop: ForwardRefExoticComponent<ScreensharingLaptopProps & RefAttributes<SVGSVGElement>>;

export default ScreensharingLaptop;
export { ScreensharingLaptop };
