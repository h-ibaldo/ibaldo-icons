import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareSplitLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareSplitLeft: ForwardRefExoticComponent<SquareSplitLeftProps & RefAttributes<SVGSVGElement>>;

export default SquareSplitLeft;
export { SquareSplitLeft };
