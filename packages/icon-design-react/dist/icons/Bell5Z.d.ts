import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5ZProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5Z: ForwardRefExoticComponent<Bell5ZProps & RefAttributes<SVGSVGElement>>;

export default Bell5Z;
export { Bell5Z };
