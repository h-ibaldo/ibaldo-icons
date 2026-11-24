import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormCheckboxLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormCheckboxLong: ForwardRefExoticComponent<FormCheckboxLongProps & RefAttributes<SVGSVGElement>>;

export default FormCheckboxLong;
export { FormCheckboxLong };
