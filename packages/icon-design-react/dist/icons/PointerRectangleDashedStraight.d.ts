import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerRectangleDashedStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerRectangleDashedStraight: ForwardRefExoticComponent<PointerRectangleDashedStraightProps & RefAttributes<SVGSVGElement>>;

export default PointerRectangleDashedStraight;
export { PointerRectangleDashedStraight };
