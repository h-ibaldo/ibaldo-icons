import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunJaggedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunJagged: ForwardRefExoticComponent<SunJaggedProps & RefAttributes<SVGSVGElement>>;

export default SunJagged;
export { SunJagged };
