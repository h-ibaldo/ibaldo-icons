import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockEditProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockEdit: ForwardRefExoticComponent<ClockEditProps & RefAttributes<Svg>>;

export default ClockEdit;
export { ClockEdit };
