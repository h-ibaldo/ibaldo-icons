import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HardDriveDiscProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HardDriveDisc: ForwardRefExoticComponent<HardDriveDiscProps & RefAttributes<SVGSVGElement>>;

export default HardDriveDisc;
export { HardDriveDisc };
