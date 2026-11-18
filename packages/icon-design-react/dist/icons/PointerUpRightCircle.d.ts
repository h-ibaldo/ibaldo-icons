import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerUpRightCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerUpRightCircle: ForwardRefExoticComponent<PointerUpRightCircleProps & RefAttributes<SVGSVGElement>>;

export default PointerUpRightCircle;
export { PointerUpRightCircle };
