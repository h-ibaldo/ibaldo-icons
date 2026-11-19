import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardPageTextProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardPageText: ForwardRefExoticComponent<ClipboardPageTextProps & RefAttributes<Svg>>;

export default ClipboardPageText;
export { ClipboardPageText };
