import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLettersBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLettersBoxy: ForwardRefExoticComponent<ChatLettersBoxyProps & RefAttributes<Svg>>;

export default ChatLettersBoxy;
export { ChatLettersBoxy };
