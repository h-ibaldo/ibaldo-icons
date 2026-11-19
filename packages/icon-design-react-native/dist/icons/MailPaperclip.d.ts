import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailPaperclipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailPaperclip: ForwardRefExoticComponent<MailPaperclipProps & RefAttributes<Svg>>;

export default MailPaperclip;
export { MailPaperclip };
