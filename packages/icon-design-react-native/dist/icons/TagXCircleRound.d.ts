import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagXCircleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagXCircleRound: ForwardRefExoticComponent<TagXCircleRoundProps & RefAttributes<Svg>>;

export default TagXCircleRound;
export { TagXCircleRound };
