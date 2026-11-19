import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveClockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveClock: ForwardRefExoticComponent<SaveClockProps & RefAttributes<Svg>>;

export default SaveClock;
export { SaveClock };
