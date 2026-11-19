import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipPlus: ForwardRefExoticComponent<PaperclipPlusProps & RefAttributes<Svg>>;

export default PaperclipPlus;
export { PaperclipPlus };
