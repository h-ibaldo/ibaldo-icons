import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagPlusCircleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagPlusCircleRound: ForwardRefExoticComponent<TagPlusCircleRoundProps & RefAttributes<Svg>>;

export default TagPlusCircleRound;
export { TagPlusCircleRound };
