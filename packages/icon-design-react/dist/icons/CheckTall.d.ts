import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckTall: ForwardRefExoticComponent<CheckTallProps & RefAttributes<SVGSVGElement>>;

export default CheckTall;
export { CheckTall };
