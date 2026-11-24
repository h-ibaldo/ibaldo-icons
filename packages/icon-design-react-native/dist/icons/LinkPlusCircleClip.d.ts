import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkPlusCircleClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkPlusCircleClip: ForwardRefExoticComponent<LinkPlusCircleClipProps & RefAttributes<Svg>>;

export default LinkPlusCircleClip;
export { LinkPlusCircleClip };
