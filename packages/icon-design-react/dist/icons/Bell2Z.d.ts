import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2ZProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2Z: ForwardRefExoticComponent<Bell2ZProps & RefAttributes<SVGSVGElement>>;

export default Bell2Z;
export { Bell2Z };
