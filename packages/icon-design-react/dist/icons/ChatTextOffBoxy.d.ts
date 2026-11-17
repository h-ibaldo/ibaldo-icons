import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextOffBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextOffBoxy: ForwardRefExoticComponent<ChatTextOffBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatTextOffBoxy;
export { ChatTextOffBoxy };
