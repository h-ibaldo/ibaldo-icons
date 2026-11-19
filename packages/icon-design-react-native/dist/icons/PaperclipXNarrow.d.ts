import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipXNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipXNarrow: ForwardRefExoticComponent<PaperclipXNarrowProps & RefAttributes<Svg>>;

export default PaperclipXNarrow;
export { PaperclipXNarrow };
