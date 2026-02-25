import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPopUp32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPopUp32: ForwardRefExoticComponent<WindowPopUp32Props & RefAttributes<SVGSVGElement>>;

export default WindowPopUp32;
export { WindowPopUp32 };
