import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckDoubleCornerWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoubleCornerWide: ForwardRefExoticComponent<ChatCheckDoubleCornerWideProps & RefAttributes<Svg>>;

export default ChatCheckDoubleCornerWide;
export { ChatCheckDoubleCornerWide };
