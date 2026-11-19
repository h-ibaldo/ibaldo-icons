import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockMinusTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockMinusTop: ForwardRefExoticComponent<ClockMinusTopProps & RefAttributes<Svg>>;

export default ClockMinusTop;
export { ClockMinusTop };
