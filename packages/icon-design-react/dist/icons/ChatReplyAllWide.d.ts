import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatReplyAllWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatReplyAllWide: ForwardRefExoticComponent<ChatReplyAllWideProps & RefAttributes<SVGSVGElement>>;

export default ChatReplyAllWide;
export { ChatReplyAllWide };
