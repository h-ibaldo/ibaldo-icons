import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeLeft: ForwardRefExoticComponent<TouchSwipeLeftProps & RefAttributes<Svg>>;

export default TouchSwipeLeft;
export { TouchSwipeLeft };
