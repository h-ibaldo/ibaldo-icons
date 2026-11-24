import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCheckWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCheckWide: ForwardRefExoticComponent<PaperclipCheckWideProps & RefAttributes<Svg>>;

export default PaperclipCheckWide;
export { PaperclipCheckWide };
