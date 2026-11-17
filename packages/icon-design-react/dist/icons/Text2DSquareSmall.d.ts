import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Text2DSquareSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Text2DSquareSmall: ForwardRefExoticComponent<Text2DSquareSmallProps & RefAttributes<SVGSVGElement>>;

export default Text2DSquareSmall;
export { Text2DSquareSmall };
