import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckboxCheckedSelectedCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckboxCheckedSelectedCircle: ForwardRefExoticComponent<CheckboxCheckedSelectedCircleProps & RefAttributes<SVGSVGElement>>;

export default CheckboxCheckedSelectedCircle;
export { CheckboxCheckedSelectedCircle };
