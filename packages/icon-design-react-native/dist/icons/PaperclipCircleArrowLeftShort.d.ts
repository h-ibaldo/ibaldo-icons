import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCircleArrowLeftShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCircleArrowLeftShort: ForwardRefExoticComponent<PaperclipCircleArrowLeftShortProps & RefAttributes<Svg>>;

export default PaperclipCircleArrowLeftShort;
export { PaperclipCircleArrowLeftShort };
