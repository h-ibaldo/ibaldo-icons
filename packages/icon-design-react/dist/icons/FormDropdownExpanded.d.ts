import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormDropdownExpandedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormDropdownExpanded: ForwardRefExoticComponent<FormDropdownExpandedProps & RefAttributes<SVGSVGElement>>;

export default FormDropdownExpanded;
export { FormDropdownExpanded };
