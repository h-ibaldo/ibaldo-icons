import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackReplyNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackReplyNotch: ForwardRefExoticComponent<ChatStackReplyNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackReplyNotch;
export { ChatStackReplyNotch };
