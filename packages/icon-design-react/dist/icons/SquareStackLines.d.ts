import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackLinesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackLines: ForwardRefExoticComponent<SquareStackLinesProps & RefAttributes<SVGSVGElement>>;

export default SquareStackLines;
export { SquareStackLines };
