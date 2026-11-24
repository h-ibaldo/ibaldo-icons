import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SwatchStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SwatchStack: ForwardRefExoticComponent<SwatchStackProps & RefAttributes<Svg>>;

export default SwatchStack;
export { SwatchStack };
