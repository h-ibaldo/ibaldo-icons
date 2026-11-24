import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipArrowUpFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipArrowUpFlipped: ForwardRefExoticComponent<PaperclipArrowUpFlippedProps & RefAttributes<Svg>>;

export default PaperclipArrowUpFlipped;
export { PaperclipArrowUpFlipped };
