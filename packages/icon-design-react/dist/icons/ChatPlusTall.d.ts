import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusTall: ForwardRefExoticComponent<ChatPlusTallProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusTall;
export { ChatPlusTall };
