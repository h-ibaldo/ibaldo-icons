import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCornerUpLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCornerUpLeft: ForwardRefExoticComponent<ArrowCornerUpLeftProps & RefAttributes<SVGSVGElement>>;

export default ArrowCornerUpLeft;
export { ArrowCornerUpLeft };
