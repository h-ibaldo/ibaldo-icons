import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagRoundedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagRounded: ForwardRefExoticComponent<TagRoundedProps & RefAttributes<Svg>>;

export default TagRounded;
export { TagRounded };
