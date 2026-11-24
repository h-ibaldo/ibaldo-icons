import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagClockRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagClockRound: ForwardRefExoticComponent<TagClockRoundProps & RefAttributes<Svg>>;

export default TagClockRound;
export { TagClockRound };
