import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CubeArrowsOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CubeArrowsOut: ForwardRefExoticComponent<CubeArrowsOutProps & RefAttributes<SVGSVGElement>>;

export default CubeArrowsOut;
export { CubeArrowsOut };
