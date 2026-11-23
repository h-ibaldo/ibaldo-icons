import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeyboardOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const KeyboardOff: ForwardRefExoticComponent<KeyboardOffProps & RefAttributes<Svg>>;

export default KeyboardOff;
export { KeyboardOff };
