import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5ExclamationProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5Exclamation: ForwardRefExoticComponent<Bell5ExclamationProps & RefAttributes<SVGSVGElement>>;

export default Bell5Exclamation;
export { Bell5Exclamation };
