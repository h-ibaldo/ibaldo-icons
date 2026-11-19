import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeartPlusWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HeartPlusWide: ForwardRefExoticComponent<HeartPlusWideProps & RefAttributes<Svg>>;

export default HeartPlusWide;
export { HeartPlusWide };
