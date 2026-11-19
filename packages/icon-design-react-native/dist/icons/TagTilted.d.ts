import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagTilted: ForwardRefExoticComponent<TagTiltedProps & RefAttributes<Svg>>;

export default TagTilted;
export { TagTilted };
