import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RotatedSquareDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RotatedSquareDown: ForwardRefExoticComponent<RotatedSquareDownProps & RefAttributes<SVGSVGElement>>;

export default RotatedSquareDown;
export { RotatedSquareDown };
