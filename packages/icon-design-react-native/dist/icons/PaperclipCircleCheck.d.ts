import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCircleCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCircleCheck: ForwardRefExoticComponent<PaperclipCircleCheckProps & RefAttributes<Svg>>;

export default PaperclipCircleCheck;
export { PaperclipCircleCheck };
