import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardMinusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardMinusCircle: ForwardRefExoticComponent<ClipboardMinusCircleProps & RefAttributes<Svg>>;

export default ClipboardMinusCircle;
export { ClipboardMinusCircle };
