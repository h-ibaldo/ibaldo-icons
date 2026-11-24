import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlameTriangleDropProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlameTriangleDrop: ForwardRefExoticComponent<FlameTriangleDropProps & RefAttributes<SVGSVGElement>>;

export default FlameTriangleDrop;
export { FlameTriangleDrop };
