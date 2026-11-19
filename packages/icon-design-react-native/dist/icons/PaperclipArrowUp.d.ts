import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipArrowUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipArrowUp: ForwardRefExoticComponent<PaperclipArrowUpProps & RefAttributes<Svg>>;

export default PaperclipArrowUp;
export { PaperclipArrowUp };
