import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHashBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHashBoxy: ForwardRefExoticComponent<ChatStackHashBoxyProps & RefAttributes<Svg>>;

export default ChatStackHashBoxy;
export { ChatStackHashBoxy };
