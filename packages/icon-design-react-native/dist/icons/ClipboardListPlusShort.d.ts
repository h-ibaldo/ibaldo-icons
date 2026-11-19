import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardListPlusShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardListPlusShort: ForwardRefExoticComponent<ClipboardListPlusShortProps & RefAttributes<Svg>>;

export default ClipboardListPlusShort;
export { ClipboardListPlusShort };
