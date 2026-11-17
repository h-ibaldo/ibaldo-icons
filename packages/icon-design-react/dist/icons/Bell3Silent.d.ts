import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell3SilentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell3Silent: ForwardRefExoticComponent<Bell3SilentProps & RefAttributes<SVGSVGElement>>;

export default Bell3Silent;
export { Bell3Silent };
