import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeartCheckWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HeartCheckWide: ForwardRefExoticComponent<HeartCheckWideProps & RefAttributes<Svg>>;

export default HeartCheckWide;
export { HeartCheckWide };
