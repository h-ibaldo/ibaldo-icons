import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassSquareWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassSquareWide: ForwardRefExoticComponent<HourglassSquareWideProps & RefAttributes<Svg>>;

export default HourglassSquareWide;
export { HourglassSquareWide };
