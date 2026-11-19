import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardListMinusShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardListMinusShort: ForwardRefExoticComponent<ClipboardListMinusShortProps & RefAttributes<Svg>>;

export default ClipboardListMinusShort;
export { ClipboardListMinusShort };
