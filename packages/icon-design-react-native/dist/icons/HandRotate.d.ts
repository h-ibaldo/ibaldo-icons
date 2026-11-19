import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandRotateProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandRotate: ForwardRefExoticComponent<HandRotateProps & RefAttributes<Svg>>;

export default HandRotate;
export { HandRotate };
