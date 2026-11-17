import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckLarge: ForwardRefExoticComponent<CheckLargeProps & RefAttributes<SVGSVGElement>>;

export default CheckLarge;
export { CheckLarge };
