import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatReplyWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatReplyWide: ForwardRefExoticComponent<ChatReplyWideProps & RefAttributes<SVGSVGElement>>;

export default ChatReplyWide;
export { ChatReplyWide };
