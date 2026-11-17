import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormLabelsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormLabels: ForwardRefExoticComponent<FormLabelsProps & RefAttributes<SVGSVGElement>>;

export default FormLabels;
export { FormLabels };
