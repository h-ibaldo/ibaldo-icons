import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagDotsCircleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagDotsCircleRound: ForwardRefExoticComponent<TagDotsCircleRoundProps & RefAttributes<Svg>>;

export default TagDotsCircleRound;
export { TagDotsCircleRound };
