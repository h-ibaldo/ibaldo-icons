import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipPlusSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipPlusSlim: ForwardRefExoticComponent<PaperclipPlusSlimProps & RefAttributes<Svg>>;

export default PaperclipPlusSlim;
export { PaperclipPlusSlim };
