import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagOffSquareTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagOffSquareTilted: ForwardRefExoticComponent<TagOffSquareTiltedProps & RefAttributes<Svg>>;

export default TagOffSquareTilted;
export { TagOffSquareTilted };
