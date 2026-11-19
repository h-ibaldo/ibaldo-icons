import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLettersBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLettersBroken: ForwardRefExoticComponent<ChatLettersBrokenProps & RefAttributes<Svg>>;

export default ChatLettersBroken;
export { ChatLettersBroken };
