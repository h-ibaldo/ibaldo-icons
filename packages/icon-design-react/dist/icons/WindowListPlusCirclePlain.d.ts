import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowListPlusCirclePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowListPlusCirclePlain: ForwardRefExoticComponent<WindowListPlusCirclePlainProps & RefAttributes<SVGSVGElement>>;

export default WindowListPlusCirclePlain;
export { WindowListPlusCirclePlain };
