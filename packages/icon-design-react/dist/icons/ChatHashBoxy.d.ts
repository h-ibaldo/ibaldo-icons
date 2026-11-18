import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHashBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHashBoxy: ForwardRefExoticComponent<ChatHashBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatHashBoxy;
export { ChatHashBoxy };
