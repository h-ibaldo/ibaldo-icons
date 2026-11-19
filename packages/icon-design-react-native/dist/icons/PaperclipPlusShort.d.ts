import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipPlusShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipPlusShort: ForwardRefExoticComponent<PaperclipPlusShortProps & RefAttributes<Svg>>;

export default PaperclipPlusShort;
export { PaperclipPlusShort };
