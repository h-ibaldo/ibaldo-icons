import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormDropdownExpandedBulletsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormDropdownExpandedBullets: ForwardRefExoticComponent<FormDropdownExpandedBulletsProps & RefAttributes<SVGSVGElement>>;

export default FormDropdownExpandedBullets;
export { FormDropdownExpandedBullets };
