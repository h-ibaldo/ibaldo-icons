import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormCheckboxCheckOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormCheckboxCheckOpen: ForwardRefExoticComponent<FormCheckboxCheckOpenProps & RefAttributes<SVGSVGElement>>;

export default FormCheckboxCheckOpen;
export { FormCheckboxCheckOpen };
