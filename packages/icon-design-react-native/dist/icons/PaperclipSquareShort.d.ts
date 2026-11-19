import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipSquareShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipSquareShort: ForwardRefExoticComponent<PaperclipSquareShortProps & RefAttributes<Svg>>;

export default PaperclipSquareShort;
export { PaperclipSquareShort };
