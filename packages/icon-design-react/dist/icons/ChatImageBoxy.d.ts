import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatImageBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatImageBoxy: ForwardRefExoticComponent<ChatImageBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatImageBoxy;
export { ChatImageBoxy };
