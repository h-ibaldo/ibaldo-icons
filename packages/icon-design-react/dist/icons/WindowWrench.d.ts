import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowWrenchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowWrench: ForwardRefExoticComponent<WindowWrenchProps & RefAttributes<SVGSVGElement>>;

export default WindowWrench;
export { WindowWrench };
