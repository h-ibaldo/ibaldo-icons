import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardX: ForwardRefExoticComponent<ClipboardXProps & RefAttributes<Svg>>;

export default ClipboardX;
export { ClipboardX };
