import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackPlus: ForwardRefExoticComponent<ChatStackPlusProps & RefAttributes<Svg>>;

export default ChatStackPlus;
export { ChatStackPlus };
