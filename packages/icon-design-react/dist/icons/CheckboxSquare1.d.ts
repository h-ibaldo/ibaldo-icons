import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckboxSquare1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckboxSquare1: ForwardRefExoticComponent<CheckboxSquare1Props & RefAttributes<SVGSVGElement>>;

export default CheckboxSquare1;
export { CheckboxSquare1 };
