import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardLinkTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardLinkTilted: ForwardRefExoticComponent<ClipboardLinkTiltedProps & RefAttributes<Svg>>;

export default ClipboardLinkTilted;
export { ClipboardLinkTilted };
