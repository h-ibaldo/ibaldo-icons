import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HardDriveCloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HardDriveClose: ForwardRefExoticComponent<HardDriveCloseProps & RefAttributes<SVGSVGElement>>;

export default HardDriveClose;
export { HardDriveClose };
