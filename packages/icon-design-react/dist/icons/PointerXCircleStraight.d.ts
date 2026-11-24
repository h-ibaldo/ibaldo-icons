import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerXCircleStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerXCircleStraight: ForwardRefExoticComponent<PointerXCircleStraightProps & RefAttributes<SVGSVGElement>>;

export default PointerXCircleStraight;
export { PointerXCircleStraight };
