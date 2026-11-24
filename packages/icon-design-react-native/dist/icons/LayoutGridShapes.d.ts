import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutGridShapesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutGridShapes: ForwardRefExoticComponent<LayoutGridShapesProps & RefAttributes<Svg>>;

export default LayoutGridShapes;
export { LayoutGridShapes };
