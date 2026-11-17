import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowBoltWideBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowBoltWideBare: ForwardRefExoticComponent<WindowBoltWideBareProps & RefAttributes<SVGSVGElement>>;

export default WindowBoltWideBare;
export { WindowBoltWideBare };
