import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipArrowUpLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipArrowUpLong: ForwardRefExoticComponent<PaperclipArrowUpLongProps & RefAttributes<Svg>>;

export default PaperclipArrowUpLong;
export { PaperclipArrowUpLong };
