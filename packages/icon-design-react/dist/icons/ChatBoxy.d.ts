import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatBoxy: ForwardRefExoticComponent<ChatBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatBoxy;
export { ChatBoxy };
