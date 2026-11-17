import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UpvoteButtonsChevronProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UpvoteButtonsChevron: ForwardRefExoticComponent<UpvoteButtonsChevronProps & RefAttributes<SVGSVGElement>>;

export default UpvoteButtonsChevron;
export { UpvoteButtonsChevron };
