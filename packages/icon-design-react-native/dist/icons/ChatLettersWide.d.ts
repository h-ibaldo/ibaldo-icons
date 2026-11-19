import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLettersWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLettersWide: ForwardRefExoticComponent<ChatLettersWideProps & RefAttributes<Svg>>;

export default ChatLettersWide;
export { ChatLettersWide };
