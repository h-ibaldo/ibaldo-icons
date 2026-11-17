import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormLockPasswordTooltipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormLockPasswordTooltip: ForwardRefExoticComponent<FormLockPasswordTooltipProps & RefAttributes<SVGSVGElement>>;

export default FormLockPasswordTooltip;
export { FormLockPasswordTooltip };
