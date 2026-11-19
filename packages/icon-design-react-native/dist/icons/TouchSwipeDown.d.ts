import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeDown: ForwardRefExoticComponent<TouchSwipeDownProps & RefAttributes<Svg>>;

export default TouchSwipeDown;
export { TouchSwipeDown };
