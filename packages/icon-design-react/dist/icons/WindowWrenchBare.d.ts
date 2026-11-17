import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowWrenchBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowWrenchBare: ForwardRefExoticComponent<WindowWrenchBareProps & RefAttributes<SVGSVGElement>>;

export default WindowWrenchBare;
export { WindowWrenchBare };
