import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailPaperclipRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailPaperclipRound: ForwardRefExoticComponent<MailPaperclipRoundProps & RefAttributes<Svg>>;

export default MailPaperclipRound;
export { MailPaperclipRound };
