import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormRadioLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormRadioLong: ForwardRefExoticComponent<FormRadioLongProps & RefAttributes<SVGSVGElement>>;

export default FormRadioLong;
export { FormRadioLong };
