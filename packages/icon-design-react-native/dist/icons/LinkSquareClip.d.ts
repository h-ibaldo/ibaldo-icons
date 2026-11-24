import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkSquareClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkSquareClip: ForwardRefExoticComponent<LinkSquareClipProps & RefAttributes<Svg>>;

export default LinkSquareClip;
export { LinkSquareClip };
