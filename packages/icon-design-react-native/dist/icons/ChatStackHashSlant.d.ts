import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHashSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHashSlant: ForwardRefExoticComponent<ChatStackHashSlantProps & RefAttributes<Svg>>;

export default ChatStackHashSlant;
export { ChatStackHashSlant };
