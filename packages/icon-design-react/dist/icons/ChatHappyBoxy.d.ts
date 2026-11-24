import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHappyBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHappyBoxy: ForwardRefExoticComponent<ChatHappyBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatHappyBoxy;
export { ChatHappyBoxy };
