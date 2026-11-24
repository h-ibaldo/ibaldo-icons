import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopoverListUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopoverListUp: ForwardRefExoticComponent<PopoverListUpProps & RefAttributes<SVGSVGElement>>;

export default PopoverListUp;
export { PopoverListUp };
