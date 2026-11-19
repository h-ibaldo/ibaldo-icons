import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagSquareTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagSquareTilted: ForwardRefExoticComponent<TagSquareTiltedProps & RefAttributes<Svg>>;

export default TagSquareTilted;
export { TagSquareTilted };
