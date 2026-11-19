import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatEqualsBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatEqualsBoxy: ForwardRefExoticComponent<ChatEqualsBoxyProps & RefAttributes<Svg>>;

export default ChatEqualsBoxy;
export { ChatEqualsBoxy };
