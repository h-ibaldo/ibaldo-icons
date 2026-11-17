import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormInputNumberDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormInputNumberDots: ForwardRefExoticComponent<FormInputNumberDotsProps & RefAttributes<SVGSVGElement>>;

export default FormInputNumberDots;
export { FormInputNumberDots };
