import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerMinusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerMinusCircle: ForwardRefExoticComponent<PointerMinusCircleProps & RefAttributes<SVGSVGElement>>;

export default PointerMinusCircle;
export { PointerMinusCircle };
