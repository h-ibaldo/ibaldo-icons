import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXBoxy: ForwardRefExoticComponent<ChatXBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatXBoxy;
export { ChatXBoxy };
