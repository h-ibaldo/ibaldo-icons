import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Text2DSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Text2DSquare: ForwardRefExoticComponent<Text2DSquareProps & RefAttributes<SVGSVGElement>>;

export default Text2DSquare;
export { Text2DSquare };
