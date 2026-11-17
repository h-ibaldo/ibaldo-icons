import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell4CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell4Check: ForwardRefExoticComponent<Bell4CheckProps & RefAttributes<SVGSVGElement>>;

export default Bell4Check;
export { Bell4Check };
