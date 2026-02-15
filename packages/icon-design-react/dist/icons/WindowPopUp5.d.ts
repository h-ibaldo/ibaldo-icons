import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPopUp5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPopUp5: ForwardRefExoticComponent<WindowPopUp5Props & RefAttributes<SVGSVGElement>>;

export default WindowPopUp5;
export { WindowPopUp5 };
