import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckDouble: ForwardRefExoticComponent<CheckDoubleProps & RefAttributes<SVGSVGElement>>;

export default CheckDouble;
export { CheckDouble };
