import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeyAngularProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const KeyAngular: ForwardRefExoticComponent<KeyAngularProps & RefAttributes<Svg>>;

export default KeyAngular;
export { KeyAngular };
