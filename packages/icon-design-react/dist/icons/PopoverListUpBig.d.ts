import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopoverListUpBigProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopoverListUpBig: ForwardRefExoticComponent<PopoverListUpBigProps & RefAttributes<SVGSVGElement>>;

export default PopoverListUpBig;
export { PopoverListUpBig };
