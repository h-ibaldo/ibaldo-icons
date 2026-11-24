import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeypadDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const KeypadDots: ForwardRefExoticComponent<KeypadDotsProps & RefAttributes<Svg>>;

export default KeypadDots;
export { KeypadDots };
