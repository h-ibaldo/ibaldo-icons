import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxTapeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxTape: ForwardRefExoticComponent<BoxTapeProps & RefAttributes<Svg>>;

export default BoxTape;
export { BoxTape };
