import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2SilentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2Silent: ForwardRefExoticComponent<Bell2SilentProps & RefAttributes<SVGSVGElement>>;

export default Bell2Silent;
export { Bell2Silent };
