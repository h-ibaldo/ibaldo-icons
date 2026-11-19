import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCircleArrowLeftLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCircleArrowLeftLong: ForwardRefExoticComponent<PaperclipCircleArrowLeftLongProps & RefAttributes<Svg>>;

export default PaperclipCircleArrowLeftLong;
export { PaperclipCircleArrowLeftLong };
