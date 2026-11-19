import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardPulseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardPulse: ForwardRefExoticComponent<ClipboardPulseProps & RefAttributes<Svg>>;

export default ClipboardPulse;
export { ClipboardPulse };
