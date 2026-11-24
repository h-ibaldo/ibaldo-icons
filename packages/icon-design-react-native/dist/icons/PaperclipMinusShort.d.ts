import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipMinusShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipMinusShort: ForwardRefExoticComponent<PaperclipMinusShortProps & RefAttributes<Svg>>;

export default PaperclipMinusShort;
export { PaperclipMinusShort };
