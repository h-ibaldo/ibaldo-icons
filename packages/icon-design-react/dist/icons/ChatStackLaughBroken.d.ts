import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackLaughBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackLaughBroken: ForwardRefExoticComponent<ChatStackLaughBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackLaughBroken;
export { ChatStackLaughBroken };
