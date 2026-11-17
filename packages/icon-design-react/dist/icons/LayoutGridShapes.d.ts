import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutGridShapesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutGridShapes: ForwardRefExoticComponent<LayoutGridShapesProps & RefAttributes<SVGSVGElement>>;

export default LayoutGridShapes;
export { LayoutGridShapes };
