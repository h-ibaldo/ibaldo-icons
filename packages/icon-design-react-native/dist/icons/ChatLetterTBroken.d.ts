import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLetterTBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLetterTBroken: ForwardRefExoticComponent<ChatLetterTBrokenProps & RefAttributes<Svg>>;

export default ChatLetterTBroken;
export { ChatLetterTBroken };
