import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipSquareLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipSquareLong: ForwardRefExoticComponent<PaperclipSquareLongProps & RefAttributes<Svg>>;

export default PaperclipSquareLong;
export { PaperclipSquareLong };
