import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowMenuProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowMenu: ForwardRefExoticComponent<WindowMenuProps & RefAttributes<SVGSVGElement>>;

export default WindowMenu;
export { WindowMenu };
