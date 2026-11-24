import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowKeyHorizontalBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowKeyHorizontalBare: ForwardRefExoticComponent<WindowKeyHorizontalBareProps & RefAttributes<SVGSVGElement>>;

export default WindowKeyHorizontalBare;
export { WindowKeyHorizontalBare };
