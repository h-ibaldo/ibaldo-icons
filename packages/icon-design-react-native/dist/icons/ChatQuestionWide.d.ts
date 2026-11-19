import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatQuestionWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatQuestionWide: ForwardRefExoticComponent<ChatQuestionWideProps & RefAttributes<Svg>>;

export default ChatQuestionWide;
export { ChatQuestionWide };
