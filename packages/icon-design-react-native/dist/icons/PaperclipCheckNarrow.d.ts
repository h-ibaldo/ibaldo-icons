import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCheckNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCheckNarrow: ForwardRefExoticComponent<PaperclipCheckNarrowProps & RefAttributes<Svg>>;

export default PaperclipCheckNarrow;
export { PaperclipCheckNarrow };
