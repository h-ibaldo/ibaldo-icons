import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagPercentStringRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagPercentStringRound: ForwardRefExoticComponent<TagPercentStringRoundProps & RefAttributes<Svg>>;

export default TagPercentStringRound;
export { TagPercentStringRound };
