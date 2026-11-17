import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormRowsSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormRowsSquare: ForwardRefExoticComponent<FormRowsSquareProps & RefAttributes<SVGSVGElement>>;

export default FormRowsSquare;
export { FormRowsSquare };
