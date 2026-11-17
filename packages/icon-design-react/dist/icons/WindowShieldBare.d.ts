import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowShieldBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowShieldBare: ForwardRefExoticComponent<WindowShieldBareProps & RefAttributes<SVGSVGElement>>;

export default WindowShieldBare;
export { WindowShieldBare };
