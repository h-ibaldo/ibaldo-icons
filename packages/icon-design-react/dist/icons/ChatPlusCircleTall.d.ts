import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusCircleTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusCircleTall: ForwardRefExoticComponent<ChatPlusCircleTallProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusCircleTall;
export { ChatPlusCircleTall };
