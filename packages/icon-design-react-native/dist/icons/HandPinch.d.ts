import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandPinchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandPinch: ForwardRefExoticComponent<HandPinchProps & RefAttributes<Svg>>;

export default HandPinch;
export { HandPinch };
