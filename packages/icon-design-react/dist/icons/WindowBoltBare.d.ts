import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowBoltBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowBoltBare: ForwardRefExoticComponent<WindowBoltBareProps & RefAttributes<SVGSVGElement>>;

export default WindowBoltBare;
export { WindowBoltBare };
