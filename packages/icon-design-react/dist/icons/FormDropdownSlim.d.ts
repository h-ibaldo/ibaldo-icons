import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormDropdownSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormDropdownSlim: ForwardRefExoticComponent<FormDropdownSlimProps & RefAttributes<SVGSVGElement>>;

export default FormDropdownSlim;
export { FormDropdownSlim };
