import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowShieldProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowShield: ForwardRefExoticComponent<WindowShieldProps & RefAttributes<SVGSVGElement>>;

export default WindowShield;
export { WindowShield };
