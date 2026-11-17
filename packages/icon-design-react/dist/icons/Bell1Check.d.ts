import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell1CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell1Check: ForwardRefExoticComponent<Bell1CheckProps & RefAttributes<SVGSVGElement>>;

export default Bell1Check;
export { Bell1Check };
