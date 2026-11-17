import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPasswordBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPasswordBare: ForwardRefExoticComponent<WindowPasswordBareProps & RefAttributes<SVGSVGElement>>;

export default WindowPasswordBare;
export { WindowPasswordBare };
