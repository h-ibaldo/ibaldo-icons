import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TriangleOffSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TriangleOffSmall: ForwardRefExoticComponent<TriangleOffSmallProps & RefAttributes<SVGSVGElement>>;

export default TriangleOffSmall;
export { TriangleOffSmall };
