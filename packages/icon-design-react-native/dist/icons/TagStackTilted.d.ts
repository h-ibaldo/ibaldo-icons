import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagStackTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagStackTilted: ForwardRefExoticComponent<TagStackTiltedProps & RefAttributes<Svg>>;

export default TagStackTilted;
export { TagStackTilted };
