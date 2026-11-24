import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusPointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusPointed: ForwardRefExoticComponent<ChatPlusPointedProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusPointed;
export { ChatPlusPointed };
