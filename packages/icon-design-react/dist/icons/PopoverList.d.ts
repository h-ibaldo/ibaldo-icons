import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopoverListProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopoverList: ForwardRefExoticComponent<PopoverListProps & RefAttributes<SVGSVGElement>>;

export default PopoverList;
export { PopoverList };
