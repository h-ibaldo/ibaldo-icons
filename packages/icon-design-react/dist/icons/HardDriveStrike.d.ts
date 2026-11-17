import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HardDriveStrikeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HardDriveStrike: ForwardRefExoticComponent<HardDriveStrikeProps & RefAttributes<SVGSVGElement>>;

export default HardDriveStrike;
export { HardDriveStrike };
