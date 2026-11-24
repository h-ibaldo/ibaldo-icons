import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagDollarTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagDollarTilted: ForwardRefExoticComponent<TagDollarTiltedProps & RefAttributes<Svg>>;

export default TagDollarTilted;
export { TagDollarTilted };
