import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell6ExclamationProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell6Exclamation: ForwardRefExoticComponent<Bell6ExclamationProps & RefAttributes<SVGSVGElement>>;

export default Bell6Exclamation;
export { Bell6Exclamation };
