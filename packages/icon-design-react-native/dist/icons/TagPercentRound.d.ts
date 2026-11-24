import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagPercentRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagPercentRound: ForwardRefExoticComponent<TagPercentRoundProps & RefAttributes<Svg>>;

export default TagPercentRound;
export { TagPercentRound };
