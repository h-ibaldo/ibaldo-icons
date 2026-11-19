import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardMinus: ForwardRefExoticComponent<ClipboardMinusProps & RefAttributes<Svg>>;

export default ClipboardMinus;
export { ClipboardMinus };
