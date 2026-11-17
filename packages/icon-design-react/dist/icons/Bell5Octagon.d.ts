import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5OctagonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5Octagon: ForwardRefExoticComponent<Bell5OctagonProps & RefAttributes<SVGSVGElement>>;

export default Bell5Octagon;
export { Bell5Octagon };
