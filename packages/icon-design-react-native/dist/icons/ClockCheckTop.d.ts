import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockCheckTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockCheckTop: ForwardRefExoticComponent<ClockCheckTopProps & RefAttributes<Svg>>;

export default ClockCheckTop;
export { ClockCheckTop };
