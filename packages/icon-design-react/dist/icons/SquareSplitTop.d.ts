import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareSplitTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareSplitTop: ForwardRefExoticComponent<SquareSplitTopProps & RefAttributes<SVGSVGElement>>;

export default SquareSplitTop;
export { SquareSplitTop };
