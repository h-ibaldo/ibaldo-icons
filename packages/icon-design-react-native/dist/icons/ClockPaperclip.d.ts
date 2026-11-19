import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockPaperclipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockPaperclip: ForwardRefExoticComponent<ClockPaperclipProps & RefAttributes<Svg>>;

export default ClockPaperclip;
export { ClockPaperclip };
