import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCircleXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCircleX: ForwardRefExoticComponent<PaperclipCircleXProps & RefAttributes<Svg>>;

export default PaperclipCircleX;
export { PaperclipCircleX };
