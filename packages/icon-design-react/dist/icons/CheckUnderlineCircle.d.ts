import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckUnderlineCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckUnderlineCircle: ForwardRefExoticComponent<CheckUnderlineCircleProps & RefAttributes<SVGSVGElement>>;

export default CheckUnderlineCircle;
export { CheckUnderlineCircle };
