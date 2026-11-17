import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowCheckCenterPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowCheckCenterPlain: ForwardRefExoticComponent<WindowCheckCenterPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowCheckCenterPlain;
export { WindowCheckCenterPlain };
