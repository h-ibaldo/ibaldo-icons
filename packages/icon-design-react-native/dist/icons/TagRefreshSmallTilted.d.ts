import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagRefreshSmallTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagRefreshSmallTilted: ForwardRefExoticComponent<TagRefreshSmallTiltedProps & RefAttributes<Svg>>;

export default TagRefreshSmallTilted;
export { TagRefreshSmallTilted };
