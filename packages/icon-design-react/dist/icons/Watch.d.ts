import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WatchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Watch: ForwardRefExoticComponent<WatchProps & RefAttributes<SVGSVGElement>>;

export default Watch;
export { Watch };
