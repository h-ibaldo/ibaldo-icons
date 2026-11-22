import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlignSquareLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlignSquareLeft: ForwardRefExoticComponent<AlignSquareLeftProps & RefAttributes<Svg>>;

export default AlignSquareLeft;
export { AlignSquareLeft };
