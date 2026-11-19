import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrophyPointedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrophyPointed: ForwardRefExoticComponent<TrophyPointedProps & RefAttributes<Svg>>;

export default TrophyPointed;
export { TrophyPointed };
