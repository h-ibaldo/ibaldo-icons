import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Check: ForwardRefExoticComponent<CheckProps & RefAttributes<SVGSVGElement>>;

export default Check;
export { Check };
