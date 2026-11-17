import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSealProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSeal: ForwardRefExoticComponent<WindowSealProps & RefAttributes<SVGSVGElement>>;

export default WindowSeal;
export { WindowSeal };
