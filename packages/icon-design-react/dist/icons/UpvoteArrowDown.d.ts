import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UpvoteArrowDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UpvoteArrowDown: ForwardRefExoticComponent<UpvoteArrowDownProps & RefAttributes<SVGSVGElement>>;

export default UpvoteArrowDown;
export { UpvoteArrowDown };
