import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXCornerWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXCornerWide: ForwardRefExoticComponent<ChatXCornerWideProps & RefAttributes<Svg>>;

export default ChatXCornerWide;
export { ChatXCornerWide };
