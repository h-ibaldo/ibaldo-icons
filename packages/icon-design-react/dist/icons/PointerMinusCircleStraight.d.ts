import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerMinusCircleStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerMinusCircleStraight: ForwardRefExoticComponent<PointerMinusCircleStraightProps & RefAttributes<SVGSVGElement>>;

export default PointerMinusCircleStraight;
export { PointerMinusCircleStraight };
