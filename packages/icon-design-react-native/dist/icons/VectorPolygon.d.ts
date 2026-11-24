import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VectorPolygonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VectorPolygon: ForwardRefExoticComponent<VectorPolygonProps & RefAttributes<Svg>>;

export default VectorPolygon;
export { VectorPolygon };
