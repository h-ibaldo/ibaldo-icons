import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckboxSquare3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckboxSquare3: ForwardRefExoticComponent<CheckboxSquare3Props & RefAttributes<SVGSVGElement>>;

export default CheckboxSquare3;
export { CheckboxSquare3 };
