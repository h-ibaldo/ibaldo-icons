import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormInputCursorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormInputCursor: ForwardRefExoticComponent<FormInputCursorProps & RefAttributes<SVGSVGElement>>;

export default FormInputCursor;
export { FormInputCursor };
