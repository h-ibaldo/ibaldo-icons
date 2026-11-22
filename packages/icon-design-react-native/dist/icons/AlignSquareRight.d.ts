import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlignSquareRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlignSquareRight: ForwardRefExoticComponent<AlignSquareRightProps & RefAttributes<Svg>>;

export default AlignSquareRight;
export { AlignSquareRight };
