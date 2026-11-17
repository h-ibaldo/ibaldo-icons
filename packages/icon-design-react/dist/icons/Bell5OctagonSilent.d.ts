import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5OctagonSilentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5OctagonSilent: ForwardRefExoticComponent<Bell5OctagonSilentProps & RefAttributes<SVGSVGElement>>;

export default Bell5OctagonSilent;
export { Bell5OctagonSilent };
