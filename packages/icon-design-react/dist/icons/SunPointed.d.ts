import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunPointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunPointed: ForwardRefExoticComponent<SunPointedProps & RefAttributes<SVGSVGElement>>;

export default SunPointed;
export { SunPointed };
