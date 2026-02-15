import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckMarkSolidHandwrittenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckMarkSolidHandwritten: ForwardRefExoticComponent<CheckMarkSolidHandwrittenProps & RefAttributes<SVGSVGElement>>;

export default CheckMarkSolidHandwritten;
export { CheckMarkSolidHandwritten };
