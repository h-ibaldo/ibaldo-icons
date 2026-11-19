import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipVertical: ForwardRefExoticComponent<PaperclipVerticalProps & RefAttributes<Svg>>;

export default PaperclipVertical;
export { PaperclipVertical };
