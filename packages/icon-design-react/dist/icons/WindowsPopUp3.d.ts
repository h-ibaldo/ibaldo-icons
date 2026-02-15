import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowsPopUp3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowsPopUp3: ForwardRefExoticComponent<WindowsPopUp3Props & RefAttributes<SVGSVGElement>>;

export default WindowsPopUp3;
export { WindowsPopUp3 };
