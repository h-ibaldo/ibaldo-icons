import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckboxSquare2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckboxSquare2: ForwardRefExoticComponent<CheckboxSquare2Props & RefAttributes<SVGSVGElement>>;

export default CheckboxSquare2;
export { CheckboxSquare2 };
