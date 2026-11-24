import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowMedalBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowMedalBare: ForwardRefExoticComponent<WindowMedalBareProps & RefAttributes<SVGSVGElement>>;

export default WindowMedalBare;
export { WindowMedalBare };
