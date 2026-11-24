import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PushpinOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PushpinOff: ForwardRefExoticComponent<PushpinOffProps & RefAttributes<Svg>>;

export default PushpinOff;
export { PushpinOff };
