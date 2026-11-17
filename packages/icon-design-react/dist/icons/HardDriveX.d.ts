import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HardDriveXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HardDriveX: ForwardRefExoticComponent<HardDriveXProps & RefAttributes<SVGSVGElement>>;

export default HardDriveX;
export { HardDriveX };
