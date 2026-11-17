import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2OctagonSilentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2OctagonSilent: ForwardRefExoticComponent<Bell2OctagonSilentProps & RefAttributes<SVGSVGElement>>;

export default Bell2OctagonSilent;
export { Bell2OctagonSilent };
