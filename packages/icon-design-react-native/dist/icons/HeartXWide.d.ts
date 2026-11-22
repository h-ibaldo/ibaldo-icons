import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeartXWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HeartXWide: ForwardRefExoticComponent<HeartXWideProps & RefAttributes<Svg>>;

export default HeartXWide;
export { HeartXWide };
