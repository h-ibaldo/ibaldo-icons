import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtRounded: ForwardRefExoticComponent<AtRoundedProps & RefAttributes<SVGSVGElement>>;

export default AtRounded;
export { AtRounded };
