import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackFlat: ForwardRefExoticComponent<ChatStackFlatProps & RefAttributes<Svg>>;

export default ChatStackFlat;
export { ChatStackFlat };
