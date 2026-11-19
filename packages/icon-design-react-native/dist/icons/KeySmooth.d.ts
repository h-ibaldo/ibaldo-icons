import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeySmoothProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const KeySmooth: ForwardRefExoticComponent<KeySmoothProps & RefAttributes<Svg>>;

export default KeySmooth;
export { KeySmooth };
