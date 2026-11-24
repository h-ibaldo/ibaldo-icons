import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipArrowUpSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipArrowUpSlim: ForwardRefExoticComponent<PaperclipArrowUpSlimProps & RefAttributes<Svg>>;

export default PaperclipArrowUpSlim;
export { PaperclipArrowUpSlim };
