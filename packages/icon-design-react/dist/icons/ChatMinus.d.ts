import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinus: ForwardRefExoticComponent<ChatMinusProps & RefAttributes<SVGSVGElement>>;

export default ChatMinus;
export { ChatMinus };
