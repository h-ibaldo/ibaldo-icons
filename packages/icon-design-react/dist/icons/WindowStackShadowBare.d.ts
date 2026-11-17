import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowStackShadowBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowStackShadowBare: ForwardRefExoticComponent<WindowStackShadowBareProps & RefAttributes<SVGSVGElement>>;

export default WindowStackShadowBare;
export { WindowStackShadowBare };
