import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpLeftDownRightCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpLeftDownRightCircle: ForwardRefExoticComponent<ArrowUpLeftDownRightCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpLeftDownRightCircle;
export { ArrowUpLeftDownRightCircle };
