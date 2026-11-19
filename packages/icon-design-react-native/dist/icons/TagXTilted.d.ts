import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagXTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagXTilted: ForwardRefExoticComponent<TagXTiltedProps & RefAttributes<Svg>>;

export default TagXTilted;
export { TagXTilted };
