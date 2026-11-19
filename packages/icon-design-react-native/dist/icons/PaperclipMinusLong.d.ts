import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipMinusLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipMinusLong: ForwardRefExoticComponent<PaperclipMinusLongProps & RefAttributes<Svg>>;

export default PaperclipMinusLong;
export { PaperclipMinusLong };
