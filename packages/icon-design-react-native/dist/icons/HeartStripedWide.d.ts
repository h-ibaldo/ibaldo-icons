import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeartStripedWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HeartStripedWide: ForwardRefExoticComponent<HeartStripedWideProps & RefAttributes<Svg>>;

export default HeartStripedWide;
export { HeartStripedWide };
