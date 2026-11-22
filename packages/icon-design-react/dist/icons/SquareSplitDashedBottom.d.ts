import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareSplitDashedBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareSplitDashedBottom: ForwardRefExoticComponent<SquareSplitDashedBottomProps & RefAttributes<SVGSVGElement>>;

export default SquareSplitDashedBottom;
export { SquareSplitDashedBottom };
