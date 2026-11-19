import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCheckFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCheckFlipped: ForwardRefExoticComponent<PaperclipCheckFlippedProps & RefAttributes<Svg>>;

export default PaperclipCheckFlipped;
export { PaperclipCheckFlipped };
