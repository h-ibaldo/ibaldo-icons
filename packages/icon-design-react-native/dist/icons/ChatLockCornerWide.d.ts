import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLockCornerWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLockCornerWide: ForwardRefExoticComponent<ChatLockCornerWideProps & RefAttributes<Svg>>;

export default ChatLockCornerWide;
export { ChatLockCornerWide };
