import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GripBarsHorizontalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GripBarsHorizontal: ForwardRefExoticComponent<GripBarsHorizontalProps & RefAttributes<Svg>>;

export default GripBarsHorizontal;
export { GripBarsHorizontal };
