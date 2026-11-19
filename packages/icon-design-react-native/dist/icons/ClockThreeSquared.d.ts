import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockThreeSquaredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockThreeSquared: ForwardRefExoticComponent<ClockThreeSquaredProps & RefAttributes<Svg>>;

export default ClockThreeSquared;
export { ClockThreeSquared };
