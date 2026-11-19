import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GripDotsHorizontalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GripDotsHorizontal: ForwardRefExoticComponent<GripDotsHorizontalProps & RefAttributes<Svg>>;

export default GripDotsHorizontal;
export { GripDotsHorizontal };
