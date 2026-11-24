import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagOffRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagOffRound: ForwardRefExoticComponent<TagOffRoundProps & RefAttributes<Svg>>;

export default TagOffRound;
export { TagOffRound };
