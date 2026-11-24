import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipXShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipXShort: ForwardRefExoticComponent<PaperclipXShortProps & RefAttributes<Svg>>;

export default PaperclipXShort;
export { PaperclipXShort };
