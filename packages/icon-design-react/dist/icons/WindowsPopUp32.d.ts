import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowsPopUp32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowsPopUp32: ForwardRefExoticComponent<WindowsPopUp32Props & RefAttributes<SVGSVGElement>>;

export default WindowsPopUp32;
export { WindowsPopUp32 };
