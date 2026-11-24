import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeypadRoundedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const KeypadRounded: ForwardRefExoticComponent<KeypadRoundedProps & RefAttributes<Svg>>;

export default KeypadRounded;
export { KeypadRounded };
