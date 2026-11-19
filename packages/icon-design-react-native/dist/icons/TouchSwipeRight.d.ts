import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeRight: ForwardRefExoticComponent<TouchSwipeRightProps & RefAttributes<Svg>>;

export default TouchSwipeRight;
export { TouchSwipeRight };
