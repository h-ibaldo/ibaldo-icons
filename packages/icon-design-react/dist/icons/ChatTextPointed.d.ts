import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextPointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextPointed: ForwardRefExoticComponent<ChatTextPointedProps & RefAttributes<SVGSVGElement>>;

export default ChatTextPointed;
export { ChatTextPointed };
