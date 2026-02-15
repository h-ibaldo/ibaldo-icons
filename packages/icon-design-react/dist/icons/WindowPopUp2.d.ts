import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPopUp2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPopUp2: ForwardRefExoticComponent<WindowPopUp2Props & RefAttributes<SVGSVGElement>>;

export default WindowPopUp2;
export { WindowPopUp2 };
