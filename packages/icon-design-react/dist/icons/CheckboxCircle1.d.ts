import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckboxCircle1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckboxCircle1: ForwardRefExoticComponent<CheckboxCircle1Props & RefAttributes<SVGSVGElement>>;

export default CheckboxCircle1;
export { CheckboxCircle1 };
