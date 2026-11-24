import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Paperclip: ForwardRefExoticComponent<PaperclipProps & RefAttributes<Svg>>;

export default Paperclip;
export { Paperclip };
