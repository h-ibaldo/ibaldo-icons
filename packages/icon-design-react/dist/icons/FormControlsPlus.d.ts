import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormControlsPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormControlsPlus: ForwardRefExoticComponent<FormControlsPlusProps & RefAttributes<SVGSVGElement>>;

export default FormControlsPlus;
export { FormControlsPlus };
