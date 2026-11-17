import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowStackShadowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowStackShadow: ForwardRefExoticComponent<WindowStackShadowProps & RefAttributes<SVGSVGElement>>;

export default WindowStackShadow;
export { WindowStackShadow };
