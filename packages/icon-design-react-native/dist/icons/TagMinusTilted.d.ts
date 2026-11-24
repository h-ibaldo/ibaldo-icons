import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagMinusTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagMinusTilted: ForwardRefExoticComponent<TagMinusTiltedProps & RefAttributes<Svg>>;

export default TagMinusTilted;
export { TagMinusTilted };
