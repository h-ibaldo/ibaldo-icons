import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiscDriveXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiscDriveX: ForwardRefExoticComponent<DiscDriveXProps & RefAttributes<SVGSVGElement>>;

export default DiscDriveX;
export { DiscDriveX };
