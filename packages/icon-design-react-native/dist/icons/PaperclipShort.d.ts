import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipShort: ForwardRefExoticComponent<PaperclipShortProps & RefAttributes<Svg>>;

export default PaperclipShort;
export { PaperclipShort };
