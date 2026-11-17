import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreensharingComputersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreensharingComputers: ForwardRefExoticComponent<ScreensharingComputersProps & RefAttributes<SVGSVGElement>>;

export default ScreensharingComputers;
export { ScreensharingComputers };
