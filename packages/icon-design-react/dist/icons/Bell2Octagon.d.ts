import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2OctagonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2Octagon: ForwardRefExoticComponent<Bell2OctagonProps & RefAttributes<SVGSVGElement>>;

export default Bell2Octagon;
export { Bell2Octagon };
