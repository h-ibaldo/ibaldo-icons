import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLaughBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLaughBroken: ForwardRefExoticComponent<ChatLaughBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatLaughBroken;
export { ChatLaughBroken };
