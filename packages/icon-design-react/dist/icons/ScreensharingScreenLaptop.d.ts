import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreensharingScreenLaptopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreensharingScreenLaptop: ForwardRefExoticComponent<ScreensharingScreenLaptopProps & RefAttributes<SVGSVGElement>>;

export default ScreensharingScreenLaptop;
export { ScreensharingScreenLaptop };
