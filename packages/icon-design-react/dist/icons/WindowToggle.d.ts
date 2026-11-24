import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowToggleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowToggle: ForwardRefExoticComponent<WindowToggleProps & RefAttributes<SVGSVGElement>>;

export default WindowToggle;
export { WindowToggle };
