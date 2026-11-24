import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardListXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardListX: ForwardRefExoticComponent<ClipboardListXProps & RefAttributes<Svg>>;

export default ClipboardListX;
export { ClipboardListX };
