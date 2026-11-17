import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatBanBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatBanBoxy: ForwardRefExoticComponent<ChatBanBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatBanBoxy;
export { ChatBanBoxy };
