import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormCheckboxLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormCheckboxLarge: ForwardRefExoticComponent<FormCheckboxLargeProps & RefAttributes<SVGSVGElement>>;

export default FormCheckboxLarge;
export { FormCheckboxLarge };
