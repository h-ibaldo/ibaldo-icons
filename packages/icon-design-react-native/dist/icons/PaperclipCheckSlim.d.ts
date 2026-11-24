import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCheckSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCheckSlim: ForwardRefExoticComponent<PaperclipCheckSlimProps & RefAttributes<Svg>>;

export default PaperclipCheckSlim;
export { PaperclipCheckSlim };
