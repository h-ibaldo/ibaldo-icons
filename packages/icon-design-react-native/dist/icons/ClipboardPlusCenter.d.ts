import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardPlusCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardPlusCenter: ForwardRefExoticComponent<ClipboardPlusCenterProps & RefAttributes<Svg>>;

export default ClipboardPlusCenter;
export { ClipboardPlusCenter };
