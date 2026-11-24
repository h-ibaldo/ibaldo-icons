import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipXLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipXLong: ForwardRefExoticComponent<PaperclipXLongProps & RefAttributes<Svg>>;

export default PaperclipXLong;
export { PaperclipXLong };
