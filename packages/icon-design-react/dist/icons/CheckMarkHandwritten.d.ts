import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckMarkHandwrittenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckMarkHandwritten: ForwardRefExoticComponent<CheckMarkHandwrittenProps & RefAttributes<SVGSVGElement>>;

export default CheckMarkHandwritten;
export { CheckMarkHandwritten };
