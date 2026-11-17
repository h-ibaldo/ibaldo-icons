import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreensharingLaptopErrorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreensharingLaptopError: ForwardRefExoticComponent<ScreensharingLaptopErrorProps & RefAttributes<SVGSVGElement>>;

export default ScreensharingLaptopError;
export { ScreensharingLaptopError };
