import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell1SilentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell1Silent: ForwardRefExoticComponent<Bell1SilentProps & RefAttributes<SVGSVGElement>>;

export default Bell1Silent;
export { Bell1Silent };
