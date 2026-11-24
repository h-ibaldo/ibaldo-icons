import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockTicksAngledProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockTicksAngled: ForwardRefExoticComponent<ClockTicksAngledProps & RefAttributes<Svg>>;

export default ClockTicksAngled;
export { ClockTicksAngled };
