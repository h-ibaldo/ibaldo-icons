import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormControlsGridPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormControlsGridPlus: ForwardRefExoticComponent<FormControlsGridPlusProps & RefAttributes<SVGSVGElement>>;

export default FormControlsGridPlus;
export { FormControlsGridPlus };
