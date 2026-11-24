import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunPointedLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunPointedLong: ForwardRefExoticComponent<SunPointedLongProps & RefAttributes<SVGSVGElement>>;

export default SunPointedLong;
export { SunPointedLong };
