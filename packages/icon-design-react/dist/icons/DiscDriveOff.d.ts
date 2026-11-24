import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiscDriveOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiscDriveOff: ForwardRefExoticComponent<DiscDriveOffProps & RefAttributes<SVGSVGElement>>;

export default DiscDriveOff;
export { DiscDriveOff };
