import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextBoxy: ForwardRefExoticComponent<ChatTextBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatTextBoxy;
export { ChatTextBoxy };
