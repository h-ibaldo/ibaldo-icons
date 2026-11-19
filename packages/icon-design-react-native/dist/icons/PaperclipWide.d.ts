import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipWide: ForwardRefExoticComponent<PaperclipWideProps & RefAttributes<Svg>>;

export default PaperclipWide;
export { PaperclipWide };
