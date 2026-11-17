import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormRadioCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormRadioCheck: ForwardRefExoticComponent<FormRadioCheckProps & RefAttributes<SVGSVGElement>>;

export default FormRadioCheck;
export { FormRadioCheck };
