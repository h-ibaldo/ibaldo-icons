import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopoverProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Popover: ForwardRefExoticComponent<PopoverProps & RefAttributes<SVGSVGElement>>;

export default Popover;
export { Popover };
