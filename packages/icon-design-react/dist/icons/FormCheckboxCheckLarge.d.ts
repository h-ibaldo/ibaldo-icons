import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormCheckboxCheckLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormCheckboxCheckLarge: ForwardRefExoticComponent<FormCheckboxCheckLargeProps & RefAttributes<SVGSVGElement>>;

export default FormCheckboxCheckLarge;
export { FormCheckboxCheckLarge };
