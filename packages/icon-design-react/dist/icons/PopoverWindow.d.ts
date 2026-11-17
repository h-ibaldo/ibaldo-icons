import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopoverWindowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopoverWindow: ForwardRefExoticComponent<PopoverWindowProps & RefAttributes<SVGSVGElement>>;

export default PopoverWindow;
export { PopoverWindow };
