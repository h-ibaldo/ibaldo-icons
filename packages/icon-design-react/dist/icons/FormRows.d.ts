import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormRowsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormRows: ForwardRefExoticComponent<FormRowsProps & RefAttributes<SVGSVGElement>>;

export default FormRows;
export { FormRows };
