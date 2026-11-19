import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLetterTWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLetterTWide: ForwardRefExoticComponent<ChatLetterTWideProps & RefAttributes<Svg>>;

export default ChatLetterTWide;
export { ChatLetterTWide };
