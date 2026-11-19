import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLockWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLockWide: ForwardRefExoticComponent<ChatLockWideProps & RefAttributes<Svg>>;

export default ChatLockWide;
export { ChatLockWide };
