import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCircleArrowRightLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCircleArrowRightLong: ForwardRefExoticComponent<PaperclipCircleArrowRightLongProps & RefAttributes<Svg>>;

export default PaperclipCircleArrowRightLong;
export { PaperclipCircleArrowRightLong };
