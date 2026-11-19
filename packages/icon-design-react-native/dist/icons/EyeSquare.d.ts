import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EyeSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EyeSquare: ForwardRefExoticComponent<EyeSquareProps & RefAttributes<Svg>>;

export default EyeSquare;
export { EyeSquare };
