import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCircleXLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCircleXLong: ForwardRefExoticComponent<PaperclipCircleXLongProps & RefAttributes<Svg>>;

export default PaperclipCircleXLong;
export { PaperclipCircleXLong };
