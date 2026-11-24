import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeySmoothNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const KeySmoothNotch: ForwardRefExoticComponent<KeySmoothNotchProps & RefAttributes<Svg>>;

export default KeySmoothNotch;
export { KeySmoothNotch };
