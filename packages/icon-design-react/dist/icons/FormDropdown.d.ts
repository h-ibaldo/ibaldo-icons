import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormDropdownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormDropdown: ForwardRefExoticComponent<FormDropdownProps & RefAttributes<SVGSVGElement>>;

export default FormDropdown;
export { FormDropdown };
