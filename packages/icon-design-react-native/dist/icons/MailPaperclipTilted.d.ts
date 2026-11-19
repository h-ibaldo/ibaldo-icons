import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailPaperclipTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailPaperclipTilted: ForwardRefExoticComponent<MailPaperclipTiltedProps & RefAttributes<Svg>>;

export default MailPaperclipTilted;
export { MailPaperclipTilted };
