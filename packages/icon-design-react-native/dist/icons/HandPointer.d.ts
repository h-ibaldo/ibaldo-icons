import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandPointerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandPointer: ForwardRefExoticComponent<HandPointerProps & RefAttributes<Svg>>;

export default HandPointer;
export { HandPointer };
