import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2Check: ForwardRefExoticComponent<Bell2CheckProps & RefAttributes<SVGSVGElement>>;

export default Bell2Check;
export { Bell2Check };
