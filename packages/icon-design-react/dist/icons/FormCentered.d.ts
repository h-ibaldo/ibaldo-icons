import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormCenteredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormCentered: ForwardRefExoticComponent<FormCenteredProps & RefAttributes<SVGSVGElement>>;

export default FormCentered;
export { FormCentered };
