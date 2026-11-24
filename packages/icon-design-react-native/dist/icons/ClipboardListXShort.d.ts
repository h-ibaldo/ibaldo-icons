import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardListXShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardListXShort: ForwardRefExoticComponent<ClipboardListXShortProps & RefAttributes<Svg>>;

export default ClipboardListXShort;
export { ClipboardListXShort };
