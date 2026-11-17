import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckboxProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Checkbox: ForwardRefExoticComponent<CheckboxProps & RefAttributes<SVGSVGElement>>;

export default Checkbox;
export { Checkbox };
