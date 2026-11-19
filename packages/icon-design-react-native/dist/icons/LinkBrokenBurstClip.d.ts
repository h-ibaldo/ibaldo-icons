import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBrokenBurstClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBrokenBurstClip: ForwardRefExoticComponent<LinkBrokenBurstClipProps & RefAttributes<Svg>>;

export default LinkBrokenBurstClip;
export { LinkBrokenBurstClip };
