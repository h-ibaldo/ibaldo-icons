import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagStringRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagStringRound: ForwardRefExoticComponent<TagStringRoundProps & RefAttributes<Svg>>;

export default TagStringRound;
export { TagStringRound };
