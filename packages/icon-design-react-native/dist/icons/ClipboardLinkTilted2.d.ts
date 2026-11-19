import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardLinkTilted2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardLinkTilted2: ForwardRefExoticComponent<ClipboardLinkTilted2Props & RefAttributes<Svg>>;

export default ClipboardLinkTilted2;
export { ClipboardLinkTilted2 };
