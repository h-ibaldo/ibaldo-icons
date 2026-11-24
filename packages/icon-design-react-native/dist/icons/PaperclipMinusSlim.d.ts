import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipMinusSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipMinusSlim: ForwardRefExoticComponent<PaperclipMinusSlimProps & RefAttributes<Svg>>;

export default PaperclipMinusSlim;
export { PaperclipMinusSlim };
