import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatForwardCornerWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatForwardCornerWide: ForwardRefExoticComponent<ChatForwardCornerWideProps & RefAttributes<Svg>>;

export default ChatForwardCornerWide;
export { ChatForwardCornerWide };
