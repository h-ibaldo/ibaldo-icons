import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerMinusStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerMinusStraight: ForwardRefExoticComponent<PointerMinusStraightProps & RefAttributes<SVGSVGElement>>;

export default PointerMinusStraight;
export { PointerMinusStraight };
