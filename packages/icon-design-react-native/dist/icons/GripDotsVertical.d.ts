import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GripDotsVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GripDotsVertical: ForwardRefExoticComponent<GripDotsVerticalProps & RefAttributes<Svg>>;

export default GripDotsVertical;
export { GripDotsVertical };
