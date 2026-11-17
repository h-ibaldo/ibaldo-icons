import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckboxCircle3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckboxCircle3: ForwardRefExoticComponent<CheckboxCircle3Props & RefAttributes<SVGSVGElement>>;

export default CheckboxCircle3;
export { CheckboxCircle3 };
