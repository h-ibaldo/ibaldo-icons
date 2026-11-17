import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormRadioDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormRadioDot: ForwardRefExoticComponent<FormRadioDotProps & RefAttributes<SVGSVGElement>>;

export default FormRadioDot;
export { FormRadioDot };
