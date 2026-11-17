import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPlus: ForwardRefExoticComponent<WindowPlusProps & RefAttributes<SVGSVGElement>>;

export default WindowPlus;
export { WindowPlus };
