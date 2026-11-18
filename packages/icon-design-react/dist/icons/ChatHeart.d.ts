import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHeartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHeart: ForwardRefExoticComponent<ChatHeartProps & RefAttributes<SVGSVGElement>>;

export default ChatHeart;
export { ChatHeart };
