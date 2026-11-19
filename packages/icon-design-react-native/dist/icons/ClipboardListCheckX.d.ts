import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardListCheckXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardListCheckX: ForwardRefExoticComponent<ClipboardListCheckXProps & RefAttributes<Svg>>;

export default ClipboardListCheckX;
export { ClipboardListCheckX };
