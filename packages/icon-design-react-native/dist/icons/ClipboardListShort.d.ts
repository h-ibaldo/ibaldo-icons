import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardListShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardListShort: ForwardRefExoticComponent<ClipboardListShortProps & RefAttributes<Svg>>;

export default ClipboardListShort;
export { ClipboardListShort };
