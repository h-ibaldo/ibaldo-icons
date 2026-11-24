import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormControlsXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormControlsX: ForwardRefExoticComponent<FormControlsXProps & RefAttributes<SVGSVGElement>>;

export default FormControlsX;
export { FormControlsX };
