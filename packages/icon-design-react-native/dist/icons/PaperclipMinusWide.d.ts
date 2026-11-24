import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipMinusWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipMinusWide: ForwardRefExoticComponent<PaperclipMinusWideProps & RefAttributes<Svg>>;

export default PaperclipMinusWide;
export { PaperclipMinusWide };
