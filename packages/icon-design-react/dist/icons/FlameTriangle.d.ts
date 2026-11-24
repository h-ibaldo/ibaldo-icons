import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlameTriangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlameTriangle: ForwardRefExoticComponent<FlameTriangleProps & RefAttributes<SVGSVGElement>>;

export default FlameTriangle;
export { FlameTriangle };
