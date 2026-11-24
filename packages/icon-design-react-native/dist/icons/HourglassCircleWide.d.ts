import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassCircleWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassCircleWide: ForwardRefExoticComponent<HourglassCircleWideProps & RefAttributes<Svg>>;

export default HourglassCircleWide;
export { HourglassCircleWide };
