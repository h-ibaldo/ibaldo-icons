import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCheckShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCheckShort: ForwardRefExoticComponent<PaperclipCheckShortProps & RefAttributes<Svg>>;

export default PaperclipCheckShort;
export { PaperclipCheckShort };
