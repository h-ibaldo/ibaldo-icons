import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeypadJoinedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const KeypadJoined: ForwardRefExoticComponent<KeypadJoinedProps & RefAttributes<Svg>>;

export default KeypadJoined;
export { KeypadJoined };
