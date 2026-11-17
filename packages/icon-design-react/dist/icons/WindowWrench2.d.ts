import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowWrench2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowWrench2: ForwardRefExoticComponent<WindowWrench2Props & RefAttributes<SVGSVGElement>>;

export default WindowWrench2;
export { WindowWrench2 };
