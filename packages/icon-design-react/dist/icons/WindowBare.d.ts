import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowBare: ForwardRefExoticComponent<WindowBareProps & RefAttributes<SVGSVGElement>>;

export default WindowBare;
export { WindowBare };
