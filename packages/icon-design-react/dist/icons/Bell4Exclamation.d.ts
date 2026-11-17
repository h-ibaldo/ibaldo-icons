import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell4ExclamationProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell4Exclamation: ForwardRefExoticComponent<Bell4ExclamationProps & RefAttributes<SVGSVGElement>>;

export default Bell4Exclamation;
export { Bell4Exclamation };
