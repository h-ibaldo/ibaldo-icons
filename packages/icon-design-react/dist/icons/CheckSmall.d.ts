import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckSmall: ForwardRefExoticComponent<CheckSmallProps & RefAttributes<SVGSVGElement>>;

export default CheckSmall;
export { CheckSmall };
