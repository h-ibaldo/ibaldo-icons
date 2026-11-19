import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipX: ForwardRefExoticComponent<PaperclipXProps & RefAttributes<Svg>>;

export default PaperclipX;
export { PaperclipX };
