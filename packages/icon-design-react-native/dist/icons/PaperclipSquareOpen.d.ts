import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipSquareOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipSquareOpen: ForwardRefExoticComponent<PaperclipSquareOpenProps & RefAttributes<Svg>>;

export default PaperclipSquareOpen;
export { PaperclipSquareOpen };
