import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagBarsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagBars: ForwardRefExoticComponent<TagBarsProps & RefAttributes<Svg>>;

export default TagBars;
export { TagBars };
