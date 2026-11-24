import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MoonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Moon: ForwardRefExoticComponent<MoonProps & RefAttributes<SVGSVGElement>>;

export default Moon;
export { Moon };
