import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsBoxy: ForwardRefExoticComponent<ChatDotsBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsBoxy;
export { ChatDotsBoxy };
