import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLaughWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLaughWide: ForwardRefExoticComponent<ChatLaughWideProps & RefAttributes<SVGSVGElement>>;

export default ChatLaughWide;
export { ChatLaughWide };
