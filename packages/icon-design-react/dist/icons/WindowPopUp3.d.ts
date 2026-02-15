import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPopUp3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPopUp3: ForwardRefExoticComponent<WindowPopUp3Props & RefAttributes<SVGSVGElement>>;

export default WindowPopUp3;
export { WindowPopUp3 };
