import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipSquareOpenThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipSquareOpenThin: ForwardRefExoticComponent<PaperclipSquareOpenThinProps & RefAttributes<Svg>>;

export default PaperclipSquareOpenThin;
export { PaperclipSquareOpenThin };
