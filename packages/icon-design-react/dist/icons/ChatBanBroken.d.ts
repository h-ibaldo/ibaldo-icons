import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatBanBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatBanBroken: ForwardRefExoticComponent<ChatBanBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatBanBroken;
export { ChatBanBroken };
