import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareSplitDashedRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareSplitDashedRight: ForwardRefExoticComponent<SquareSplitDashedRightProps & RefAttributes<SVGSVGElement>>;

export default SquareSplitDashedRight;
export { SquareSplitDashedRight };
