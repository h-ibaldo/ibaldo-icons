import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckCornerWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckCornerWide: ForwardRefExoticComponent<ChatCheckCornerWideProps & RefAttributes<Svg>>;

export default ChatCheckCornerWide;
export { ChatCheckCornerWide };
