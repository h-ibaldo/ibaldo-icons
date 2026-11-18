import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDollarBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDollarBoxy: ForwardRefExoticComponent<ChatDollarBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatDollarBoxy;
export { ChatDollarBoxy };
