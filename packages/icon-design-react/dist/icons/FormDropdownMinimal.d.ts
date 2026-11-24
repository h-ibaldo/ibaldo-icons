import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormDropdownMinimalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormDropdownMinimal: ForwardRefExoticComponent<FormDropdownMinimalProps & RefAttributes<SVGSVGElement>>;

export default FormDropdownMinimal;
export { FormDropdownMinimal };
