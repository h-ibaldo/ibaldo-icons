import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatBroken: ForwardRefExoticComponent<ChatBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatBroken;
export { ChatBroken };
