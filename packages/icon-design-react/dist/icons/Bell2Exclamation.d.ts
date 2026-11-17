import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2ExclamationProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2Exclamation: ForwardRefExoticComponent<Bell2ExclamationProps & RefAttributes<SVGSVGElement>>;

export default Bell2Exclamation;
export { Bell2Exclamation };
