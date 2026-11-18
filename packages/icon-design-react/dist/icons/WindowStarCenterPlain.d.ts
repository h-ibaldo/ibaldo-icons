import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowStarCenterPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowStarCenterPlain: ForwardRefExoticComponent<WindowStarCenterPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowStarCenterPlain;
export { WindowStarCenterPlain };
