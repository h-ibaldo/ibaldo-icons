import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCircleXShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCircleXShort: ForwardRefExoticComponent<PaperclipCircleXShortProps & RefAttributes<Svg>>;

export default PaperclipCircleXShort;
export { PaperclipCircleXShort };
