import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeartHandshakeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HeartHandshake: ForwardRefExoticComponent<HeartHandshakeProps & RefAttributes<Svg>>;

export default HeartHandshake;
export { HeartHandshake };
