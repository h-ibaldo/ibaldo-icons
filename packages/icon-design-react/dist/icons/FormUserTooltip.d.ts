import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormUserTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormUserTooltip: ForwardRefExoticComponent<FormUserTooltipProps & RefAttributes<SVGSVGElement>>;

export default FormUserTooltip;
export { FormUserTooltip };
