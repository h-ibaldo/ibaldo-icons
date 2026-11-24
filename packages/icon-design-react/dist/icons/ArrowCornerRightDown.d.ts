import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCornerRightDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCornerRightDown: ForwardRefExoticComponent<ArrowCornerRightDownProps & RefAttributes<SVGSVGElement>>;

export default ArrowCornerRightDown;
export { ArrowCornerRightDown };
