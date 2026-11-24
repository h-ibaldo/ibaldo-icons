import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeadphonesXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HeadphonesX: ForwardRefExoticComponent<HeadphonesXProps & RefAttributes<Svg>>;

export default HeadphonesX;
export { HeadphonesX };
