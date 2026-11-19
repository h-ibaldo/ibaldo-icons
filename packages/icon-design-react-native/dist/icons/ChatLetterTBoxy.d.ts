import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLetterTBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLetterTBoxy: ForwardRefExoticComponent<ChatLetterTBoxyProps & RefAttributes<Svg>>;

export default ChatLetterTBoxy;
export { ChatLetterTBoxy };
