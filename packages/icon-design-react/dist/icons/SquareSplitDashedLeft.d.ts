import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareSplitDashedLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareSplitDashedLeft: ForwardRefExoticComponent<SquareSplitDashedLeftProps & RefAttributes<SVGSVGElement>>;

export default SquareSplitDashedLeft;
export { SquareSplitDashedLeft };
