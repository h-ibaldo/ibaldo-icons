import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipPlusNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipPlusNarrow: ForwardRefExoticComponent<PaperclipPlusNarrowProps & RefAttributes<Svg>>;

export default PaperclipPlusNarrow;
export { PaperclipPlusNarrow };
