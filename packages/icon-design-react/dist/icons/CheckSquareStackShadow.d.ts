import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckSquareStackShadowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckSquareStackShadow: ForwardRefExoticComponent<CheckSquareStackShadowProps & RefAttributes<SVGSVGElement>>;

export default CheckSquareStackShadow;
export { CheckSquareStackShadow };
