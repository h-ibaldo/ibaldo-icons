import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipSquareOpenVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipSquareOpenVertical: ForwardRefExoticComponent<PaperclipSquareOpenVerticalProps & RefAttributes<Svg>>;

export default PaperclipSquareOpenVertical;
export { PaperclipSquareOpenVertical };
