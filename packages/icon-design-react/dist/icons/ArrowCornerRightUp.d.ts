import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCornerRightUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCornerRightUp: ForwardRefExoticComponent<ArrowCornerRightUpProps & RefAttributes<SVGSVGElement>>;

export default ArrowCornerRightUp;
export { ArrowCornerRightUp };
