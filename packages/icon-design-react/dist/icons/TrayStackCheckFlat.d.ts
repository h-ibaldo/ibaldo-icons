import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrayStackCheckFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrayStackCheckFlat: ForwardRefExoticComponent<TrayStackCheckFlatProps & RefAttributes<SVGSVGElement>>;

export default TrayStackCheckFlat;
export { TrayStackCheckFlat };
