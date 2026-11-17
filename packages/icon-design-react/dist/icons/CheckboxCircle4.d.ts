import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckboxCircle4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckboxCircle4: ForwardRefExoticComponent<CheckboxCircle4Props & RefAttributes<SVGSVGElement>>;

export default CheckboxCircle4;
export { CheckboxCircle4 };
