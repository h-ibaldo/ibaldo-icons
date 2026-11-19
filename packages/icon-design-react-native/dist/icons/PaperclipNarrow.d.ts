import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipNarrow: ForwardRefExoticComponent<PaperclipNarrowProps & RefAttributes<Svg>>;

export default PaperclipNarrow;
export { PaperclipNarrow };
