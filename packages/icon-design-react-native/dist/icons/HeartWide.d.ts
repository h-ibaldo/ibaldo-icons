import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeartWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HeartWide: ForwardRefExoticComponent<HeartWideProps & RefAttributes<Svg>>;

export default HeartWide;
export { HeartWide };
