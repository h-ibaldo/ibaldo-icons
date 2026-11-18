import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatText: ForwardRefExoticComponent<ChatTextProps & RefAttributes<SVGSVGElement>>;

export default ChatText;
export { ChatText };
