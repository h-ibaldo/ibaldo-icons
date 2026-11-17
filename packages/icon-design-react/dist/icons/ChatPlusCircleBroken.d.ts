import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusCircleBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusCircleBroken: ForwardRefExoticComponent<ChatPlusCircleBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusCircleBroken;
export { ChatPlusCircleBroken };
