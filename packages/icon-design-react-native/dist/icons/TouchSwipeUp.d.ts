import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeUp: ForwardRefExoticComponent<TouchSwipeUpProps & RefAttributes<Svg>>;

export default TouchSwipeUp;
export { TouchSwipeUp };
