import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlignSquareTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlignSquareTop: ForwardRefExoticComponent<AlignSquareTopProps & RefAttributes<Svg>>;

export default AlignSquareTop;
export { AlignSquareTop };
