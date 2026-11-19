import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDollarWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDollarWide: ForwardRefExoticComponent<ChatDollarWideProps & RefAttributes<Svg>>;

export default ChatDollarWide;
export { ChatDollarWide };
