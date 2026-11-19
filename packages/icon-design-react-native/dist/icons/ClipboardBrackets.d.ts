import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardBracketsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardBrackets: ForwardRefExoticComponent<ClipboardBracketsProps & RefAttributes<Svg>>;

export default ClipboardBrackets;
export { ClipboardBrackets };
