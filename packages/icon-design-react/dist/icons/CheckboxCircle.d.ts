import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckboxCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckboxCircle: ForwardRefExoticComponent<CheckboxCircleProps & RefAttributes<SVGSVGElement>>;

export default CheckboxCircle;
export { CheckboxCircle };
