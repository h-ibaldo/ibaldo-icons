import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunPointedShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunPointedShort: ForwardRefExoticComponent<SunPointedShortProps & RefAttributes<SVGSVGElement>>;

export default SunPointedShort;
export { SunPointedShort };
