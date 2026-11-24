import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeartBrokenWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HeartBrokenWide: ForwardRefExoticComponent<HeartBrokenWideProps & RefAttributes<Svg>>;

export default HeartBrokenWide;
export { HeartBrokenWide };
