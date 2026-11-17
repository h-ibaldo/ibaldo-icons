import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormUsernameTooltipDropProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormUsernameTooltipDrop: ForwardRefExoticComponent<FormUsernameTooltipDropProps & RefAttributes<SVGSVGElement>>;

export default FormUsernameTooltipDrop;
export { FormUsernameTooltipDrop };
