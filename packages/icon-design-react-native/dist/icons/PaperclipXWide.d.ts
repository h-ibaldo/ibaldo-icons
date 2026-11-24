import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipXWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipXWide: ForwardRefExoticComponent<PaperclipXWideProps & RefAttributes<Svg>>;

export default PaperclipXWide;
export { PaperclipXWide };
