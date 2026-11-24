import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DatabaseClockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DatabaseClock: ForwardRefExoticComponent<DatabaseClockProps & RefAttributes<Svg>>;

export default DatabaseClock;
export { DatabaseClock };
