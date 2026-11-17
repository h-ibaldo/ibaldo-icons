import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormUserDropProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormUserDrop: ForwardRefExoticComponent<FormUserDropProps & RefAttributes<SVGSVGElement>>;

export default FormUserDrop;
export { FormUserDrop };
