import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCircle: ForwardRefExoticComponent<PaperclipCircleProps & RefAttributes<Svg>>;

export default PaperclipCircle;
export { PaperclipCircle };
