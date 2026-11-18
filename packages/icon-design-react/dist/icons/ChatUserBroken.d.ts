import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatUserBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatUserBroken: ForwardRefExoticComponent<ChatUserBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatUserBroken;
export { ChatUserBroken };
