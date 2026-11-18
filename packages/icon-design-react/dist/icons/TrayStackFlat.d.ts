import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrayStackFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrayStackFlat: ForwardRefExoticComponent<TrayStackFlatProps & RefAttributes<SVGSVGElement>>;

export default TrayStackFlat;
export { TrayStackFlat };
