import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCircleArrowLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCircleArrowLeft: ForwardRefExoticComponent<PaperclipCircleArrowLeftProps & RefAttributes<Svg>>;

export default PaperclipCircleArrowLeft;
export { PaperclipCircleArrowLeft };
