import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTextFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTextFacing: ForwardRefExoticComponent<ChatStackTextFacingProps & RefAttributes<Svg>>;

export default ChatStackTextFacing;
export { ChatStackTextFacing };
