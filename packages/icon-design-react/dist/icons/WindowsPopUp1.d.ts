import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowsPopUp1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowsPopUp1: ForwardRefExoticComponent<WindowsPopUp1Props & RefAttributes<SVGSVGElement>>;

export default WindowsPopUp1;
export { WindowsPopUp1 };
