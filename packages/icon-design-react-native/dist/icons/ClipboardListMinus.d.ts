import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardListMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardListMinus: ForwardRefExoticComponent<ClipboardListMinusProps & RefAttributes<Svg>>;

export default ClipboardListMinus;
export { ClipboardListMinus };
