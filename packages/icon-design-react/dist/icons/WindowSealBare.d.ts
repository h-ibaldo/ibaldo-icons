import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSealBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSealBare: ForwardRefExoticComponent<WindowSealBareProps & RefAttributes<SVGSVGElement>>;

export default WindowSealBare;
export { WindowSealBare };
