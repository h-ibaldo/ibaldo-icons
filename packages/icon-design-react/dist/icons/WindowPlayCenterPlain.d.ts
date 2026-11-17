import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPlayCenterPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPlayCenterPlain: ForwardRefExoticComponent<WindowPlayCenterPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowPlayCenterPlain;
export { WindowPlayCenterPlain };
