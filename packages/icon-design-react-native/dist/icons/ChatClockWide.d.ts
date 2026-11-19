import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatClockWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatClockWide: ForwardRefExoticComponent<ChatClockWideProps & RefAttributes<Svg>>;

export default ChatClockWide;
export { ChatClockWide };
