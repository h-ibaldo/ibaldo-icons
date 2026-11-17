import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckCircleOpen3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckCircleOpen3: ForwardRefExoticComponent<CheckCircleOpen3Props & RefAttributes<SVGSVGElement>>;

export default CheckCircleOpen3;
export { CheckCircleOpen3 };
