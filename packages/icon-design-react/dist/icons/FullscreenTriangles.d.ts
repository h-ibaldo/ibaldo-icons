import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FullscreenTrianglesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FullscreenTriangles: ForwardRefExoticComponent<FullscreenTrianglesProps & RefAttributes<SVGSVGElement>>;

export default FullscreenTriangles;
export { FullscreenTriangles };
