import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagCheckTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagCheckTilted: ForwardRefExoticComponent<TagCheckTiltedProps & RefAttributes<Svg>>;

export default TagCheckTilted;
export { TagCheckTilted };
