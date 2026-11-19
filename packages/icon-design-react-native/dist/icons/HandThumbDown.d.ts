import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandThumbDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandThumbDown: ForwardRefExoticComponent<HandThumbDownProps & RefAttributes<Svg>>;

export default HandThumbDown;
export { HandThumbDown };
