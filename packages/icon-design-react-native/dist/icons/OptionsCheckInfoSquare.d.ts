import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface OptionsCheckInfoSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const OptionsCheckInfoSquare: ForwardRefExoticComponent<OptionsCheckInfoSquareProps & RefAttributes<Svg>>;

export default OptionsCheckInfoSquare;
export { OptionsCheckInfoSquare };
