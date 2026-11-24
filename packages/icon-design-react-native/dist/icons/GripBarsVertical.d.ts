import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GripBarsVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GripBarsVertical: ForwardRefExoticComponent<GripBarsVerticalProps & RefAttributes<Svg>>;

export default GripBarsVertical;
export { GripBarsVertical };
