import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckboxSquareSelect2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckboxSquareSelect2: ForwardRefExoticComponent<CheckboxSquareSelect2Props & RefAttributes<SVGSVGElement>>;

export default CheckboxSquareSelect2;
export { CheckboxSquareSelect2 };
