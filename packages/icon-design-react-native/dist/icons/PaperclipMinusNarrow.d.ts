import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipMinusNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipMinusNarrow: ForwardRefExoticComponent<PaperclipMinusNarrowProps & RefAttributes<Svg>>;

export default PaperclipMinusNarrow;
export { PaperclipMinusNarrow };
