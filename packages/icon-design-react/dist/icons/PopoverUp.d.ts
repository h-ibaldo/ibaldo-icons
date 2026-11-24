import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopoverUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopoverUp: ForwardRefExoticComponent<PopoverUpProps & RefAttributes<SVGSVGElement>>;

export default PopoverUp;
export { PopoverUp };
