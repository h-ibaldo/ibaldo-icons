import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowsPopUp2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowsPopUp2: ForwardRefExoticComponent<WindowsPopUp2Props & RefAttributes<SVGSVGElement>>;

export default WindowsPopUp2;
export { WindowsPopUp2 };
