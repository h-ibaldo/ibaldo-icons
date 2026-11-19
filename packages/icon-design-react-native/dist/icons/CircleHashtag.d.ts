import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleHashtagProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleHashtag: ForwardRefExoticComponent<CircleHashtagProps & RefAttributes<Svg>>;

export default CircleHashtag;
export { CircleHashtag };
