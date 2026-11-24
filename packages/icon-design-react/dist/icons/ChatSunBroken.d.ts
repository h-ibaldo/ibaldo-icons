import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSunBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSunBroken: ForwardRefExoticComponent<ChatSunBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatSunBroken;
export { ChatSunBroken };
