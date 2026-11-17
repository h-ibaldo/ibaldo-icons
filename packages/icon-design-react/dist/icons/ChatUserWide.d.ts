import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatUserWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatUserWide: ForwardRefExoticComponent<ChatUserWideProps & RefAttributes<SVGSVGElement>>;

export default ChatUserWide;
export { ChatUserWide };
