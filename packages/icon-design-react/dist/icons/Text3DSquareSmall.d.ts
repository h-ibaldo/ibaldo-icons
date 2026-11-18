import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Text3DSquareSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Text3DSquareSmall: ForwardRefExoticComponent<Text3DSquareSmallProps & RefAttributes<SVGSVGElement>>;

export default Text3DSquareSmall;
export { Text3DSquareSmall };
