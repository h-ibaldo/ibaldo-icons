import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSearchCornerWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSearchCornerWide: ForwardRefExoticComponent<ChatSearchCornerWideProps & RefAttributes<Svg>>;

export default ChatSearchCornerWide;
export { ChatSearchCornerWide };
