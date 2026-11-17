import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopoverBigProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopoverBig: ForwardRefExoticComponent<PopoverBigProps & RefAttributes<SVGSVGElement>>;

export default PopoverBig;
export { PopoverBig };
