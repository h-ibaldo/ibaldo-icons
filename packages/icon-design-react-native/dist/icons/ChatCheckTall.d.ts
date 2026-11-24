import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckTall: ForwardRefExoticComponent<ChatCheckTallProps & RefAttributes<Svg>>;

export default ChatCheckTall;
export { ChatCheckTall };
