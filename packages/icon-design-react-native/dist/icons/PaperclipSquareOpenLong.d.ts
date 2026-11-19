import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipSquareOpenLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipSquareOpenLong: ForwardRefExoticComponent<PaperclipSquareOpenLongProps & RefAttributes<Svg>>;

export default PaperclipSquareOpenLong;
export { PaperclipSquareOpenLong };
