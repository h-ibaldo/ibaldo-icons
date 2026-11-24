import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardListMinusCircleShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardListMinusCircleShort: ForwardRefExoticComponent<ClipboardListMinusCircleShortProps & RefAttributes<Svg>>;

export default ClipboardListMinusCircleShort;
export { ClipboardListMinusCircleShort };
