import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandPointerUnderlineProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandPointerUnderline: ForwardRefExoticComponent<HandPointerUnderlineProps & RefAttributes<Svg>>;

export default HandPointerUnderline;
export { HandPointerUnderline };
