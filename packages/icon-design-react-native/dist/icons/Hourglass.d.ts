import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Hourglass: ForwardRefExoticComponent<HourglassProps & RefAttributes<Svg>>;

export default Hourglass;
export { Hourglass };
