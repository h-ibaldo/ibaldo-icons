import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareSplitBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareSplitBottom: ForwardRefExoticComponent<SquareSplitBottomProps & RefAttributes<SVGSVGElement>>;

export default SquareSplitBottom;
export { SquareSplitBottom };
