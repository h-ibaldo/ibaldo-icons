import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowHeartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowHeart: ForwardRefExoticComponent<WindowHeartProps & RefAttributes<Svg>>;

export default WindowHeart;
export { WindowHeart };
