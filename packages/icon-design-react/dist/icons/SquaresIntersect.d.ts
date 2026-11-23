import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquaresIntersectProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquaresIntersect: ForwardRefExoticComponent<SquaresIntersectProps & RefAttributes<SVGSVGElement>>;

export default SquaresIntersect;
export { SquaresIntersect };
