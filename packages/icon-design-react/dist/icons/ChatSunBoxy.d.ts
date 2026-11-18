import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSunBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSunBoxy: ForwardRefExoticComponent<ChatSunBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatSunBoxy;
export { ChatSunBoxy };
