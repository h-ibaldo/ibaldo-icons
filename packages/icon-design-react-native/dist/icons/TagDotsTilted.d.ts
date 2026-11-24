import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagDotsTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagDotsTilted: ForwardRefExoticComponent<TagDotsTiltedProps & RefAttributes<Svg>>;

export default TagDotsTilted;
export { TagDotsTilted };
