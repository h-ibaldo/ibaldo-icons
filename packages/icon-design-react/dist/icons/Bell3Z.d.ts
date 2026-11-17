import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell3ZProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell3Z: ForwardRefExoticComponent<Bell3ZProps & RefAttributes<SVGSVGElement>>;

export default Bell3Z;
export { Bell3Z };
