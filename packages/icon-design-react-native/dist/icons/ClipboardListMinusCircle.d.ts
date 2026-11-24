import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardListMinusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardListMinusCircle: ForwardRefExoticComponent<ClipboardListMinusCircleProps & RefAttributes<Svg>>;

export default ClipboardListMinusCircle;
export { ClipboardListMinusCircle };
