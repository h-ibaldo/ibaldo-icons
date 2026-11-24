import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunTinyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunTiny: ForwardRefExoticComponent<SunTinyProps & RefAttributes<SVGSVGElement>>;

export default SunTiny;
export { SunTiny };
