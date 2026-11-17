import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackReplyAllNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackReplyAllNotch: ForwardRefExoticComponent<ChatStackReplyAllNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackReplyAllNotch;
export { ChatStackReplyAllNotch };
