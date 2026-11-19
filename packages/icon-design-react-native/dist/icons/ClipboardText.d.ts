import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardTextProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardText: ForwardRefExoticComponent<ClipboardTextProps & RefAttributes<Svg>>;

export default ClipboardText;
export { ClipboardText };
