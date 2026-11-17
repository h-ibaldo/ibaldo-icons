import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5Check: ForwardRefExoticComponent<Bell5CheckProps & RefAttributes<SVGSVGElement>>;

export default Bell5Check;
export { Bell5Check };
