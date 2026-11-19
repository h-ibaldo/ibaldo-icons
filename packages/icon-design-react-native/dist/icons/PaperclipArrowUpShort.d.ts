import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipArrowUpShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipArrowUpShort: ForwardRefExoticComponent<PaperclipArrowUpShortProps & RefAttributes<Svg>>;

export default PaperclipArrowUpShort;
export { PaperclipArrowUpShort };
