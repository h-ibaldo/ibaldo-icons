import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunShortRadiantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunShortRadiant: ForwardRefExoticComponent<SunShortRadiantProps & RefAttributes<SVGSVGElement>>;

export default SunShortRadiant;
export { SunShortRadiant };
