import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandStopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandStop: ForwardRefExoticComponent<HandStopProps & RefAttributes<Svg>>;

export default HandStop;
export { HandStop };
