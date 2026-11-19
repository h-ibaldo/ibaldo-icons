import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagBarsTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagBarsTilted: ForwardRefExoticComponent<TagBarsTiltedProps & RefAttributes<Svg>>;

export default TagBarsTilted;
export { TagBarsTilted };
