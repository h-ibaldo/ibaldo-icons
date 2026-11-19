import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackX: ForwardRefExoticComponent<ChatStackXProps & RefAttributes<Svg>>;

export default ChatStackX;
export { ChatStackX };
