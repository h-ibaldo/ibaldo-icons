import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPopUp1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPopUp1: ForwardRefExoticComponent<WindowPopUp1Props & RefAttributes<SVGSVGElement>>;

export default WindowPopUp1;
export { WindowPopUp1 };
