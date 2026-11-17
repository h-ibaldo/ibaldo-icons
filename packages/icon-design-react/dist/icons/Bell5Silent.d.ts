import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5SilentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5Silent: ForwardRefExoticComponent<Bell5SilentProps & RefAttributes<SVGSVGElement>>;

export default Bell5Silent;
export { Bell5Silent };
