import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSearchBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSearchBoxy: ForwardRefExoticComponent<ChatSearchBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatSearchBoxy;
export { ChatSearchBoxy };
