import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipSquareOpenShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipSquareOpenShort: ForwardRefExoticComponent<PaperclipSquareOpenShortProps & RefAttributes<Svg>>;

export default PaperclipSquareOpenShort;
export { PaperclipSquareOpenShort };
