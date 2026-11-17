import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell4ZProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell4Z: ForwardRefExoticComponent<Bell4ZProps & RefAttributes<SVGSVGElement>>;

export default Bell4Z;
export { Bell4Z };
