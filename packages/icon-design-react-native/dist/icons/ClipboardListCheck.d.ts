import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardListCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardListCheck: ForwardRefExoticComponent<ClipboardListCheckProps & RefAttributes<Svg>>;

export default ClipboardListCheck;
export { ClipboardListCheck };
