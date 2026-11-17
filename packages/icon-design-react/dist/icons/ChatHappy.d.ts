import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHappyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHappy: ForwardRefExoticComponent<ChatHappyProps & RefAttributes<SVGSVGElement>>;

export default ChatHappy;
export { ChatHappy };
