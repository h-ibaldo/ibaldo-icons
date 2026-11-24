import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopoverWindowPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopoverWindowPlain: ForwardRefExoticComponent<PopoverWindowPlainProps & RefAttributes<SVGSVGElement>>;

export default PopoverWindowPlain;
export { PopoverWindowPlain };
