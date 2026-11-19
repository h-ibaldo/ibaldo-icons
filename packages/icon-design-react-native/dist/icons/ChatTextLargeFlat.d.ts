import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextLargeFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextLargeFlat: ForwardRefExoticComponent<ChatTextLargeFlatProps & RefAttributes<Svg>>;

export default ChatTextLargeFlat;
export { ChatTextLargeFlat };
