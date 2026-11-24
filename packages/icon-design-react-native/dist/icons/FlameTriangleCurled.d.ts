import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FlameTriangleCurledProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FlameTriangleCurled: ForwardRefExoticComponent<FlameTriangleCurledProps & RefAttributes<Svg>>;

export default FlameTriangleCurled;
export { FlameTriangleCurled };
