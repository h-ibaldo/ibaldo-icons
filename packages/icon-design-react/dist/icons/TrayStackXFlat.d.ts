import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrayStackXFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrayStackXFlat: ForwardRefExoticComponent<TrayStackXFlatProps & RefAttributes<SVGSVGElement>>;

export default TrayStackXFlat;
export { TrayStackXFlat };
