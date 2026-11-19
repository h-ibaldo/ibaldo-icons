import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardWarningProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardWarning: ForwardRefExoticComponent<ClipboardWarningProps & RefAttributes<Svg>>;

export default ClipboardWarning;
export { ClipboardWarning };
