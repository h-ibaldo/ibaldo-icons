import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipSquare: ForwardRefExoticComponent<PaperclipSquareProps & RefAttributes<Svg>>;

export default PaperclipSquare;
export { PaperclipSquare };
