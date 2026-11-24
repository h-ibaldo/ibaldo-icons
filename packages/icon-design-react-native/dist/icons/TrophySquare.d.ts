import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrophySquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrophySquare: ForwardRefExoticComponent<TrophySquareProps & RefAttributes<Svg>>;

export default TrophySquare;
export { TrophySquare };
