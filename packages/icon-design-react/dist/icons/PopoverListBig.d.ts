import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopoverListBigProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopoverListBig: ForwardRefExoticComponent<PopoverListBigProps & RefAttributes<SVGSVGElement>>;

export default PopoverListBig;
export { PopoverListBig };
