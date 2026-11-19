import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipMinusFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipMinusFlipped: ForwardRefExoticComponent<PaperclipMinusFlippedProps & RefAttributes<Svg>>;

export default PaperclipMinusFlipped;
export { PaperclipMinusFlipped };
