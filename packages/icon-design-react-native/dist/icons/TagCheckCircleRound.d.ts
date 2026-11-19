import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagCheckCircleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagCheckCircleRound: ForwardRefExoticComponent<TagCheckCircleRoundProps & RefAttributes<Svg>>;

export default TagCheckCircleRound;
export { TagCheckCircleRound };
