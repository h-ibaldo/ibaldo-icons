import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkXClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkXClip: ForwardRefExoticComponent<LinkXClipProps & RefAttributes<Svg>>;

export default LinkXClip;
export { LinkXClip };
