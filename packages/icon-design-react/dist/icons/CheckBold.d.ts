import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckBoldProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckBold: ForwardRefExoticComponent<CheckBoldProps & RefAttributes<SVGSVGElement>>;

export default CheckBold;
export { CheckBold };
