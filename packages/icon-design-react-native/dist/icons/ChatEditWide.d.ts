import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatEditWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatEditWide: ForwardRefExoticComponent<ChatEditWideProps & RefAttributes<Svg>>;

export default ChatEditWide;
export { ChatEditWide };
