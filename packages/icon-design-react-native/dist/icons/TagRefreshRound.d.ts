import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagRefreshRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagRefreshRound: ForwardRefExoticComponent<TagRefreshRoundProps & RefAttributes<Svg>>;

export default TagRefreshRound;
export { TagRefreshRound };
