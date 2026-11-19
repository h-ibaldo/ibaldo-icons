import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagRound: ForwardRefExoticComponent<TagRoundProps & RefAttributes<Svg>>;

export default TagRound;
export { TagRound };
