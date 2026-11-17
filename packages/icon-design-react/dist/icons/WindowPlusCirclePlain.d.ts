import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPlusCirclePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPlusCirclePlain: ForwardRefExoticComponent<WindowPlusCirclePlainProps & RefAttributes<SVGSVGElement>>;

export default WindowPlusCirclePlain;
export { WindowPlusCirclePlain };
