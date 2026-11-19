import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardListCheckShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardListCheckShort: ForwardRefExoticComponent<ClipboardListCheckShortProps & RefAttributes<Svg>>;

export default ClipboardListCheckShort;
export { ClipboardListCheckShort };
