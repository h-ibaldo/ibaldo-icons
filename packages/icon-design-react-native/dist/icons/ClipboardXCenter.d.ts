import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardXCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardXCenter: ForwardRefExoticComponent<ClipboardXCenterProps & RefAttributes<Svg>>;

export default ClipboardXCenter;
export { ClipboardXCenter };
