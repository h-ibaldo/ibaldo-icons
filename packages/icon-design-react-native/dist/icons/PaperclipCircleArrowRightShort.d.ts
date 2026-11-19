import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCircleArrowRightShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCircleArrowRightShort: ForwardRefExoticComponent<PaperclipCircleArrowRightShortProps & RefAttributes<Svg>>;

export default PaperclipCircleArrowRightShort;
export { PaperclipCircleArrowRightShort };
