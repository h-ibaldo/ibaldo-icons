import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagDividerDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagDividerDashed: ForwardRefExoticComponent<TagDividerDashedProps & RefAttributes<Svg>>;

export default TagDividerDashed;
export { TagDividerDashed };
