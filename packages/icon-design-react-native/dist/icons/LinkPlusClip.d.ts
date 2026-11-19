import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkPlusClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkPlusClip: ForwardRefExoticComponent<LinkPlusClipProps & RefAttributes<Svg>>;

export default LinkPlusClip;
export { LinkPlusClip };
