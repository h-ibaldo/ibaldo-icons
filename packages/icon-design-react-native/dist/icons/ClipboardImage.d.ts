import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardImageProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardImage: ForwardRefExoticComponent<ClipboardImageProps & RefAttributes<Svg>>;

export default ClipboardImage;
export { ClipboardImage };
