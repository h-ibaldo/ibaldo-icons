import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormRadioDotLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormRadioDotLong: ForwardRefExoticComponent<FormRadioDotLongProps & RefAttributes<SVGSVGElement>>;

export default FormRadioDotLong;
export { FormRadioDotLong };
