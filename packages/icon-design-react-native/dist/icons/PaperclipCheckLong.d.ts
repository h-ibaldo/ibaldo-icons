import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCheckLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCheckLong: ForwardRefExoticComponent<PaperclipCheckLongProps & RefAttributes<Svg>>;

export default PaperclipCheckLong;
export { PaperclipCheckLong };
