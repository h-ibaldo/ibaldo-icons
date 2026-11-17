import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell4SilentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell4Silent: ForwardRefExoticComponent<Bell4SilentProps & RefAttributes<SVGSVGElement>>;

export default Bell4Silent;
export { Bell4Silent };
