import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipPlusVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipPlusVertical: ForwardRefExoticComponent<PaperclipPlusVerticalProps & RefAttributes<Svg>>;

export default PaperclipPlusVertical;
export { PaperclipPlusVertical };
