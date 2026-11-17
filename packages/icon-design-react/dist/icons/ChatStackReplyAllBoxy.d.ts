import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackReplyAllBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackReplyAllBoxy: ForwardRefExoticComponent<ChatStackReplyAllBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackReplyAllBoxy;
export { ChatStackReplyAllBoxy };
