import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTextFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTextFlat: ForwardRefExoticComponent<ChatStackTextFlatProps & RefAttributes<Svg>>;

export default ChatStackTextFlat;
export { ChatStackTextFlat };
