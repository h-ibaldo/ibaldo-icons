import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowRosetteBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowRosetteBare: ForwardRefExoticComponent<WindowRosetteBareProps & RefAttributes<SVGSVGElement>>;

export default WindowRosetteBare;
export { WindowRosetteBare };
