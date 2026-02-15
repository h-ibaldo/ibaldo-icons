import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun: ForwardRefExoticComponent<SunProps & RefAttributes<SVGSVGElement>>;

export default Sun;
export { Sun };
