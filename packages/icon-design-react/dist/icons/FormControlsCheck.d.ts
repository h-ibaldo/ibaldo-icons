import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormControlsCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormControlsCheck: ForwardRefExoticComponent<FormControlsCheckProps & RefAttributes<SVGSVGElement>>;

export default FormControlsCheck;
export { FormControlsCheck };
