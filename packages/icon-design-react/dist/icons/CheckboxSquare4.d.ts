import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckboxSquare4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckboxSquare4: ForwardRefExoticComponent<CheckboxSquare4Props & RefAttributes<SVGSVGElement>>;

export default CheckboxSquare4;
export { CheckboxSquare4 };
