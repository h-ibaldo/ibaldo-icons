import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCornerDownRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCornerDownRight: ForwardRefExoticComponent<ArrowCornerDownRightProps & RefAttributes<SVGSVGElement>>;

export default ArrowCornerDownRight;
export { ArrowCornerDownRight };
