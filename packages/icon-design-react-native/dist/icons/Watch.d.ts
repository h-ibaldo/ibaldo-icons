import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WatchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Watch: ForwardRefExoticComponent<WatchProps & RefAttributes<Svg>>;

export default Watch;
export { Watch };
