import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowModalBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowModalBare: ForwardRefExoticComponent<WindowModalBareProps & RefAttributes<SVGSVGElement>>;

export default WindowModalBare;
export { WindowModalBare };
