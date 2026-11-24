import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusCirclePointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusCirclePointed: ForwardRefExoticComponent<ChatPlusCirclePointedProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusCirclePointed;
export { ChatPlusCirclePointed };
