import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatWarningWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatWarningWide: ForwardRefExoticComponent<ChatWarningWideProps & RefAttributes<Svg>>;

export default ChatWarningWide;
export { ChatWarningWide };
