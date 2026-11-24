import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeadphonesRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HeadphonesRound: ForwardRefExoticComponent<HeadphonesRoundProps & RefAttributes<Svg>>;

export default HeadphonesRound;
export { HeadphonesRound };
