import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextFlat: ForwardRefExoticComponent<ChatTextFlatProps & RefAttributes<Svg>>;

export default ChatTextFlat;
export { ChatTextFlat };
