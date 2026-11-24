import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrayStackHeartFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrayStackHeartFlat: ForwardRefExoticComponent<TrayStackHeartFlatProps & RefAttributes<SVGSVGElement>>;

export default TrayStackHeartFlat;
export { TrayStackHeartFlat };
