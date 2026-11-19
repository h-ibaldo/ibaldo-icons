import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCircleCheckLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCircleCheckLong: ForwardRefExoticComponent<PaperclipCircleCheckLongProps & RefAttributes<Svg>>;

export default PaperclipCircleCheckLong;
export { PaperclipCircleCheckLong };
