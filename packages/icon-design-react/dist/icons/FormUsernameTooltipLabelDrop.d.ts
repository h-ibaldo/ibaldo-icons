import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormUsernameTooltipLabelDropProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormUsernameTooltipLabelDrop: ForwardRefExoticComponent<FormUsernameTooltipLabelDropProps & RefAttributes<SVGSVGElement>>;

export default FormUsernameTooltipLabelDrop;
export { FormUsernameTooltipLabelDrop };
