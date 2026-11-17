import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlameTriangleCurledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlameTriangleCurled: ForwardRefExoticComponent<FlameTriangleCurledProps & RefAttributes<SVGSVGElement>>;

export default FlameTriangleCurled;
export { FlameTriangleCurled };
