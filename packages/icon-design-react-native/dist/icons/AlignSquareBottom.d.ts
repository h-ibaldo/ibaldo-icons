import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlignSquareBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlignSquareBottom: ForwardRefExoticComponent<AlignSquareBottomProps & RefAttributes<Svg>>;

export default AlignSquareBottom;
export { AlignSquareBottom };
