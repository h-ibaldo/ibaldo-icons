import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHashBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHashBroken: ForwardRefExoticComponent<ChatHashBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatHashBroken;
export { ChatHashBroken };
