import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHappyBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHappyBroken: ForwardRefExoticComponent<ChatHappyBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatHappyBroken;
export { ChatHappyBroken };
