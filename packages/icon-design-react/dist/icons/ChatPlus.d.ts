import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlus: ForwardRefExoticComponent<ChatPlusProps & RefAttributes<SVGSVGElement>>;

export default ChatPlus;
export { ChatPlus };
