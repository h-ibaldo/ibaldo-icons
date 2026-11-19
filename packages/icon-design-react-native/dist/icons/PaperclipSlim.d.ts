import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipSlim: ForwardRefExoticComponent<PaperclipSlimProps & RefAttributes<Svg>>;

export default PaperclipSlim;
export { PaperclipSlim };
