import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormCheckboxCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormCheckboxCheck: ForwardRefExoticComponent<FormCheckboxCheckProps & RefAttributes<SVGSVGElement>>;

export default FormCheckboxCheck;
export { FormCheckboxCheck };
