import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipLong: ForwardRefExoticComponent<PaperclipLongProps & RefAttributes<Svg>>;

export default PaperclipLong;
export { PaperclipLong };
