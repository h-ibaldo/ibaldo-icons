import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagStackOffsetProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagStackOffset: ForwardRefExoticComponent<TagStackOffsetProps & RefAttributes<Svg>>;

export default TagStackOffset;
export { TagStackOffset };
