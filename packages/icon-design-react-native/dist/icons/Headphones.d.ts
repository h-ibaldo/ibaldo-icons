import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeadphonesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Headphones: ForwardRefExoticComponent<HeadphonesProps & RefAttributes<Svg>>;

export default Headphones;
export { Headphones };
