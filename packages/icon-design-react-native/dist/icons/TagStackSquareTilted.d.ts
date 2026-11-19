import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagStackSquareTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagStackSquareTilted: ForwardRefExoticComponent<TagStackSquareTiltedProps & RefAttributes<Svg>>;

export default TagStackSquareTilted;
export { TagStackSquareTilted };
