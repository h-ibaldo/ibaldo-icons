import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackReplyBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackReplyBoxy: ForwardRefExoticComponent<ChatStackReplyBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackReplyBoxy;
export { ChatStackReplyBoxy };
