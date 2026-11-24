import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagBarsStringRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagBarsStringRound: ForwardRefExoticComponent<TagBarsStringRoundProps & RefAttributes<Svg>>;

export default TagBarsStringRound;
export { TagBarsStringRound };
