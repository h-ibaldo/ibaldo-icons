import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreensharingScreenComputersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreensharingScreenComputers: ForwardRefExoticComponent<ScreensharingScreenComputersProps & RefAttributes<SVGSVGElement>>;

export default ScreensharingScreenComputers;
export { ScreensharingScreenComputers };
