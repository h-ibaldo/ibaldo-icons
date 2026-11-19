import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagBarsRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagBarsRound: ForwardRefExoticComponent<TagBarsRoundProps & RefAttributes<Svg>>;

export default TagBarsRound;
export { TagBarsRound };
