import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardCheckCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardCheckCenter: ForwardRefExoticComponent<ClipboardCheckCenterProps & RefAttributes<Svg>>;

export default ClipboardCheckCenter;
export { ClipboardCheckCenter };
