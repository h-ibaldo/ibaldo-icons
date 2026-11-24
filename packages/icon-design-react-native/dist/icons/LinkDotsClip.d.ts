import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkDotsClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkDotsClip: ForwardRefExoticComponent<LinkDotsClipProps & RefAttributes<Svg>>;

export default LinkDotsClip;
export { LinkDotsClip };
