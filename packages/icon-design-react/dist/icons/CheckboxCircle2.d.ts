import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckboxCircle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckboxCircle2: ForwardRefExoticComponent<CheckboxCircle2Props & RefAttributes<SVGSVGElement>>;

export default CheckboxCircle2;
export { CheckboxCircle2 };
