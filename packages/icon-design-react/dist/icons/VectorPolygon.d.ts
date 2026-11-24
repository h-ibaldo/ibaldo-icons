import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VectorPolygonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VectorPolygon: ForwardRefExoticComponent<VectorPolygonProps & RefAttributes<SVGSVGElement>>;

export default VectorPolygon;
export { VectorPolygon };
