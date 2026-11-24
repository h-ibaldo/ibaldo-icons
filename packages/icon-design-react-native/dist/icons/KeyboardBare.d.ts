import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeyboardBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const KeyboardBare: ForwardRefExoticComponent<KeyboardBareProps & RefAttributes<Svg>>;

export default KeyboardBare;
export { KeyboardBare };
