import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockPaperclipTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockPaperclipTilted: ForwardRefExoticComponent<ClockPaperclipTiltedProps & RefAttributes<Svg>>;

export default ClockPaperclipTilted;
export { ClockPaperclipTilted };
