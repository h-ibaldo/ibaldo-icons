import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell3ExclamationProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell3Exclamation: ForwardRefExoticComponent<Bell3ExclamationProps & RefAttributes<SVGSVGElement>>;

export default Bell3Exclamation;
export { Bell3Exclamation };
