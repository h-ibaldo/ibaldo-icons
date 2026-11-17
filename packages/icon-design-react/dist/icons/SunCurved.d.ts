import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunCurved: ForwardRefExoticComponent<SunCurvedProps & RefAttributes<SVGSVGElement>>;

export default SunCurved;
export { SunCurved };
