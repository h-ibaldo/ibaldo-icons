import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopoverUpBigProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopoverUpBig: ForwardRefExoticComponent<PopoverUpBigProps & RefAttributes<SVGSVGElement>>;

export default PopoverUpBig;
export { PopoverUpBig };
