import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatListWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatListWide: ForwardRefExoticComponent<ChatListWideProps & RefAttributes<SVGSVGElement>>;

export default ChatListWide;
export { ChatListWide };
