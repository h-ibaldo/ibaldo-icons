import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UpvoteButtonsChevronArrowUpDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UpvoteButtonsChevronArrowUpDown: ForwardRefExoticComponent<UpvoteButtonsChevronArrowUpDownProps & RefAttributes<SVGSVGElement>>;

export default UpvoteButtonsChevronArrowUpDown;
export { UpvoteButtonsChevronArrowUpDown };
