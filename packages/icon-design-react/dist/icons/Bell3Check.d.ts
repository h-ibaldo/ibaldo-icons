import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell3CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell3Check: ForwardRefExoticComponent<Bell3CheckProps & RefAttributes<SVGSVGElement>>;

export default Bell3Check;
export { Bell3Check };
