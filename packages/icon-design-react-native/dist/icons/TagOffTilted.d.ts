import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagOffTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagOffTilted: ForwardRefExoticComponent<TagOffTiltedProps & RefAttributes<Svg>>;

export default TagOffTilted;
export { TagOffTilted };
