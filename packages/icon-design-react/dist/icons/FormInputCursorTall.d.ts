import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormInputCursorTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormInputCursorTall: ForwardRefExoticComponent<FormInputCursorTallProps & RefAttributes<SVGSVGElement>>;

export default FormInputCursorTall;
export { FormInputCursorTall };
