import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormUsernameTooltipSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormUsernameTooltipSquare: ForwardRefExoticComponent<FormUsernameTooltipSquareProps & RefAttributes<SVGSVGElement>>;

export default FormUsernameTooltipSquare;
export { FormUsernameTooltipSquare };
